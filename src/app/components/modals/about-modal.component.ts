import { Component, input, output } from '@angular/core';
import { ModalDialogComponent } from './modal-dialog.component';

@Component({
  selector: 'app-about-modal',
  imports: [ModalDialogComponent],
  template: `
    <app-modal-dialog
      [isOpen]="isOpen()"
      headerLabel="// 03 Perfil & Filosofía"
      titleId="about-modal-title"
      (closed)="closed.emit()"
    >
      <div class="space-y-5 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
        <div>
          <h3 class="text-xl font-bold text-neutral-950 dark:text-white tracking-tight mb-1">
            Software Developer
          </h3>
          <p class="text-xs font-mono text-mono-muted uppercase tracking-wider">
            Angular • WordPress • API Development • AI Automation • GA4 • n8n
          </p>
        </div>

        <p>
          Mi enfoque combina la ingeniería de frontend reactivo con la automatización de procesos empresariales. Creo en soluciones sobrias donde el código es mantenible, las integraciones son confiables y cada pieza responde a objetivos claros de negocio.
        </p>

        <!-- Áreas de Especialidad -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div class="border border-mono-borderLight dark:border-mono-borderDark p-3 rounded">
            <span class="font-mono text-xs text-mono-muted block mb-1">// Frontend &amp; CMS</span>
            <p class="text-xs text-neutral-800 dark:text-neutral-200">
              Desarrollo de SPAs reactivas de alto rendimiento con <strong>Angular</strong> y ecosistemas administrables en <strong>WordPress</strong>.
            </p>
          </div>

          <div class="border border-mono-borderLight dark:border-mono-borderDark p-3 rounded">
            <span class="font-mono text-xs text-mono-muted block mb-1">// APIs &amp; Conectividad</span>
            <p class="text-xs text-neutral-800 dark:text-neutral-200">
              Diseño e implementación de <strong>APIs RESTful</strong> para comunicar frontends, bases de datos y servicios de terceros.
            </p>
          </div>

          <div class="border border-mono-borderLight dark:border-mono-borderDark p-3 rounded">
            <span class="font-mono text-xs text-mono-muted block mb-1">// AI Automation &amp; n8n</span>
            <p class="text-xs text-neutral-800 dark:text-neutral-200">
              Automatización de operaciones complejas, facturación y conciliaciones mediante <strong>n8n</strong> y agentes con <strong>IA</strong>.
            </p>
          </div>

          <div class="border border-mono-borderLight dark:border-mono-borderDark p-3 rounded">
            <span class="font-mono text-xs text-mono-muted block mb-1">// Analítica &amp; Datos</span>
            <p class="text-xs text-neutral-800 dark:text-neutral-200">
              Medición y seguimiento de eventos clave mediante <strong>Google Analytics 4</strong> para tomar decisiones informadas por datos.
            </p>
          </div>
        </div>

        <div class="pt-2 border-t border-mono-borderLight dark:border-mono-borderDark grid grid-cols-2 gap-4 font-mono text-xs">
          <div>
            <span class="text-mono-muted block">// Principio 01</span>
            <span class="font-medium text-neutral-900 dark:text-neutral-100">Rendimiento por diseño</span>
          </div>
          <div>
            <span class="text-mono-muted block">// Principio 02</span>
            <span class="font-medium text-neutral-900 dark:text-neutral-100">Automatización sin fricción</span>
          </div>
        </div>
      </div>
    </app-modal-dialog>
  `
})
export class AboutModalComponent {
  readonly isOpen = input<boolean>(false);
  readonly closed = output<void>();
}
