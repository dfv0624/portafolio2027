import { Component, input, output } from '@angular/core';
import { ModalDialogComponent } from './modal-dialog.component';

interface PhilosophyPillar {
  readonly number: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
}

@Component({
  selector: 'app-about-modal',
  imports: [ModalDialogComponent],
  template: `
    <app-modal-dialog
      [isOpen]="isOpen()"
      headerLabel="// 03 Perfil & Filosofía de Trabajo"
      titleId="about-modal-title"
      (closed)="closed.emit()"
    >
      <div class="space-y-6 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans max-h-[65vh] overflow-y-auto pr-2">
        <!-- Introducción & Posicionamiento Profesional -->
        <div class="space-y-2 pb-4 border-b border-mono-borderLight dark:border-mono-borderDark">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h3 class="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white tracking-tight">
              Software Developer & Product Builder
            </h3>
            <span class="font-mono text-[11px] text-mono-muted tracking-wide">
              COLOMBIA // DISPONIBLE REMOTO
            </span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono">
            // Criterio pragmático • Automatización de procesos • Arquitectura limpia
          </p>

          <p class="text-sm sm:text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-200 pt-1">
            Concibo el software como una disciplina donde convergen el rigor técnico de la ingeniería, la automatización estratégica de flujos de negocio y una estética visual intencional. No construyo código por inercia: desarrollo soluciones diseñadas para operar de forma confiable, reducir cargas operativas manuales y resolver fricciones reales de producto.
          </p>
        </div>

        <!-- Manifiesto de Principios de Ingeniería -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="font-mono text-xs uppercase tracking-wider text-mono-muted">
              // Manifiesto &amp; Criterio de Decisión
            </h4>
            <span class="font-mono text-[10px] text-mono-muted">
              4 PILARES FUNDAMENTALES
            </span>
          </div>

          <div class="space-y-4.5">
            @for (pillar of pillars; track pillar.number) {
              <article
                class="group p-3.5 sm:p-4 rounded-lg bg-mono-surfaceLight/60 dark:bg-mono-surfaceDark/60 border border-mono-borderLight dark:border-mono-borderDark hover:border-neutral-900/40 dark:hover:border-neutral-100/40 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300"
              >
                <div class="flex items-baseline justify-between gap-2 mb-1.5">
                  <div class="flex items-baseline gap-2">
                    <span class="font-mono text-xs text-neutral-950 dark:text-white font-semibold">
                      {{ pillar.number }}
                    </span>
                    <h5 class="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
                      {{ pillar.title }}
                    </h5>
                  </div>
                  <span class="font-mono text-[10px] uppercase text-mono-muted hidden sm:inline">
                    {{ pillar.subtitle }}
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                  {{ pillar.description }}
                </p>
              </article>
            }
          </div>
        </div>

        <!-- Forma de Trabajo & Compromiso -->
        <div class="pt-4 border-t border-mono-borderLight dark:border-mono-borderDark space-y-3">
          <h4 class="font-mono text-xs uppercase tracking-wider text-mono-muted">
            // Modelo de Colaboración
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div class="p-3 rounded border border-mono-borderLight dark:border-mono-borderDark bg-mono-surfaceLight/40 dark:bg-mono-surfaceDark/40">
              <span class="text-mono-muted block text-[10px] uppercase mb-1">Enfoque</span>
              <span class="font-medium text-neutral-900 dark:text-neutral-100 block">
                End-to-End
              </span>
              <p class="text-[11px] text-neutral-600 dark:text-neutral-400 font-sans mt-1">
                Desde la arquitectura y frontend hasta la integración de APIs y automatización en producción.
              </p>
            </div>

            <div class="p-3 rounded border border-mono-borderLight dark:border-mono-borderDark bg-mono-surfaceLight/40 dark:bg-mono-surfaceDark/40">
              <span class="text-mono-muted block text-[10px] uppercase mb-1">Rigor</span>
              <span class="font-medium text-neutral-900 dark:text-neutral-100 block">
                Calidad Medible
              </span>
              <p class="text-[11px] text-neutral-600 dark:text-neutral-400 font-sans mt-1">
                Tipado estricto, accesibilidad WCAG AA, métricas de velocidad y código mantenible.
              </p>
            </div>

            <div class="p-3 rounded border border-mono-borderLight dark:border-mono-borderDark bg-mono-surfaceLight/40 dark:bg-mono-surfaceDark/40">
              <span class="text-mono-muted block text-[10px] uppercase mb-1">Entrega</span>
              <span class="font-medium text-neutral-900 dark:text-neutral-100 block">
                Iteración Ágil
              </span>
              <p class="text-[11px] text-neutral-600 dark:text-neutral-400 font-sans mt-1">
                Comunicación directa, despliegues continuos verificados y cero sorpresas en producción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </app-modal-dialog>
  `
})
export class AboutModalComponent {
  readonly isOpen = input<boolean>(false);
  readonly closed = output<void>();

  protected readonly pillars: readonly PhilosophyPillar[] = [
    {
      number: '// 01',
      title: 'Criterio técnico sobre modas',
      subtitle: 'PRAGMATISMO DE NEGOCIO',
      description:
        'Cada proyecto exige la herramienta correcta para su objetivo específico. Para plataformas SaaS empresariales y aplicaciones de alta interacción elijo arquitecturas tipadas en Angular con Signals; para marcas y agencias que necesitan autonomía de contenidos y velocidad de lanzamiento, desarrollo ecosistemas modernos en WordPress y Elementor Pro con optimización y código a medida.'
    },
    {
      number: '// 02',
      title: 'Automatización con retorno de inversión',
      subtitle: 'EFICIENCIA OPERATIVA',
      description:
        'Si una tarea administrativa o técnica es repetitiva, representa una fuga silenciosa de recursos. Diseño workflows autónomos (n8n, webhooks bancarios, pipelines de IA) para conciliación de facturación electrónica y sincronización de datos que reemplazan horas de trabajo manual por ejecuciones deterministas en segundos.'
    },
    {
      number: '// 03',
      title: 'Mantenibilidad y rendimiento por diseño',
      subtitle: 'SOSTENIBILIDAD TÉCNICA',
      description:
        'La velocidad de entrega inicial carece de valor si engendra deuda técnica instantánea. Priorizo arquitecturas desacopladas, patrones limpios, estándares de accesibilidad WCAG AA y mediciones objetivas de rendimiento para garantizar que el software crezca sin volverse un dolor de cabeza para el equipo o el cliente.'
    },
    {
      number: '// 04',
      title: 'Visión de producto de punta a punta',
      subtitle: 'RESPONSABILIDAD INTEGRAL',
      description:
        'El rol de un desarrollador no concluye en la compilación local. Me involucro en la comprensión del modelo de negocio, la refinación de la experiencia de usuario (UI/UX), los pipelines de CI/CD para despliegues confiables y la instrumentación de analítica de eventos que permita validar hipótesis con datos reales.'
    }
  ];
}
