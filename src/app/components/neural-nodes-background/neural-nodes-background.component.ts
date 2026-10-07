import {
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  effect,
  inject,
  viewChild
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

interface NodeItem {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

@Component({
  selector: 'app-neural-nodes-background',
  host: {
    class: 'block fixed inset-0 pointer-events-none z-0 overflow-hidden'
  },
  template: `
    <canvas
      #canvasRef
      class="w-full h-full pointer-events-none"
      aria-hidden="true"
    ></canvas>
  `,
  styles: `
    :host {
      contain: strict;
      mask-image: radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0.4) 100%);
      -webkit-mask-image: radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0.4) 100%);
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `
})
export class NeuralNodesBackgroundComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly themeService = inject(ThemeService);

  private readonly canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('canvasRef');

  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrameId: number | null = null;

  private width = 0;
  private height = 0;
  private dpr = 1;

  // Seguimiento del cursor
  private mouseX = -1000;
  private mouseY = -1000;
  private hasMouse = false;

  private nodes: NodeItem[] = [];
  // Número calibrado para máxima elegancia y legibilidad (sin saturar)
  private readonly nodeCount = 52;
  private readonly maxConnectionDist = 125;
  private readonly mouseConnectionDist = 165;

  constructor() {
    effect(() => {
      this.themeService.isDark();
      if (this.ctx) {
        this.renderFrame();
      }
    });

    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      window.setTimeout(() => this.initCanvas(), 0);
    }
  }

  private initCanvas(): void {
    const canvas = this.canvasRef()?.nativeElement;
    if (!canvas) {
      return;
    }

    this.ctx = canvas.getContext('2d', { alpha: true });
    if (!this.ctx) {
      return;
    }

    this.updateDimensions();
    this.createNodes();

    const handlePointerMove = (e: PointerEvent): void => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.hasMouse = true;
    };

    const handlePointerLeave = (): void => {
      this.hasMouse = false;
      this.mouseX = -1000;
      this.mouseY = -1000;
    };

    const handleResize = (): void => {
      this.updateDimensions();
      this.createNodes();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    this.startLoop();

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
      if (this.animationFrameId !== null) {
        window.cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
    });
  }

  private updateDimensions(): void {
    const canvas = this.canvasRef()?.nativeElement;
    if (!canvas || !this.ctx) {
      return;
    }

    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    canvas.width = Math.floor(this.width * this.dpr);
    canvas.height = Math.floor(this.height * this.dpr);

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(this.dpr, this.dpr);
  }

  private createNodes(): void {
    this.nodes = [];
    for (let i = 0; i < this.nodeCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.2 + Math.random() * 0.35; // Desplazamiento muy lento y relajado

      this.nodes.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 1.2 + Math.random() * 1.0, // Puntos milimétricos (1.2px - 2.2px)
        baseAlpha: 0.18 + Math.random() * 0.14
      });
    }
  }

  private startLoop(): void {
    const loop = (): void => {
      this.updateNodes();
      this.renderFrame();
      this.animationFrameId = window.requestAnimationFrame(loop);
    };

    this.animationFrameId = window.requestAnimationFrame(loop);
  }

  private updateNodes(): void {
    for (const node of this.nodes) {
      // Interacción con el cursor (atracción magnética suave)
      if (this.hasMouse) {
        const dx = this.mouseX - node.x;
        const dy = this.mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouseConnectionDist && dist > 5) {
          const force = (1 - dist / this.mouseConnectionDist) * 0.08;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }
      }

      // Fricción suave para limitar aceleraciones
      node.vx *= 0.98;
      node.vy *= 0.98;

      // Asegurar velocidad mínima para que sigan flotando
      const currentSpeed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
      if (currentSpeed < 0.15) {
        node.vx *= 1.05;
        node.vy *= 1.05;
      } else if (currentSpeed > 0.8) {
        node.vx *= 0.9;
        node.vy *= 0.9;
      }

      node.x += node.vx;
      node.y += node.vy;

      // Rebote suave en los bordes
      if (node.x <= 0) {
        node.x = 0;
        node.vx = Math.abs(node.vx);
      } else if (node.x >= this.width) {
        node.x = this.width;
        node.vx = -Math.abs(node.vx);
      }

      if (node.y <= 0) {
        node.y = 0;
        node.vy = Math.abs(node.vy);
      } else if (node.y >= this.height) {
        node.y = this.height;
        node.vy = -Math.abs(node.vy);
      }
    }
  }

  private renderFrame(): void {
    if (!this.ctx) {
      return;
    }

    this.ctx.clearRect(0, 0, this.width, this.height);

    const isDark = this.themeService.isDark();
    // Color según el tema: grafito en modo claro, plata luminoso en modo oscuro
    const rgb = isDark ? '244, 244, 245' : '24, 24, 27';

    // 1. Dibujar conexiones entre nodos cercanos (sinapsis finas)
    this.ctx.lineWidth = 0.75;

    for (let i = 0; i < this.nodes.length; i++) {
      const a = this.nodes[i];
      for (let j = i + 1; j < this.nodes.length; j++) {
        const b = this.nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxConnectionDist) {
          // Opacidad inversa a la distancia: muy tenue (máx 11%)
          const alpha = (1 - dist / this.maxConnectionDist) * 0.11;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b.x, b.y);
          this.ctx.stroke();
        }
      }

      // 2. Conexión del cursor a los nodos cercanos
      if (this.hasMouse) {
        const dx = a.x - this.mouseX;
        const dy = a.y - this.mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouseConnectionDist) {
          const alpha = (1 - dist / this.mouseConnectionDist) * 0.16;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(this.mouseX, this.mouseY);
          this.ctx.stroke();
        }
      }
    }

    // 3. Dibujar los nodos (puntos limpios)
    for (const node of this.nodes) {
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${rgb}, ${node.baseAlpha})`;
      this.ctx.fill();
    }
  }
}
