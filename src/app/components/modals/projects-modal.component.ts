import { Component, input, output } from '@angular/core';
import { ProjectItem } from '../../core/models/portfolio.model';
import { ModalDialogComponent } from './modal-dialog.component';

@Component({
  selector: 'app-projects-modal',
  imports: [ModalDialogComponent],
  template: `
    <app-modal-dialog
      [isOpen]="isOpen()"
      headerLabel="// 01 Proyectos"
      titleId="projects-modal-title"
      (closed)="closed.emit()"
    >
      <div class="space-y-4 font-sans max-h-[60vh] overflow-y-auto pr-2">
        @for (project of projects(); track project.title) {
          <article
            class="border border-mono-borderLight dark:border-mono-borderDark p-4 rounded hover:border-black dark:hover:border-white transition-colors"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="font-mono text-[11px] text-mono-muted">
                {{ project.year }} • {{ project.category }}
              </span>
              <div class="flex items-center gap-3">
                @if (project.githubUrl) {
                  <a
                    [href]="project.githubUrl"
                    target="_blank"
                    rel="noreferrer"
                    class="font-mono text-[11px] hover:underline text-neutral-900 dark:text-neutral-100 flex items-center gap-1"
                  >
                    GitHub ↗
                  </a>
                }
                @if (project.liveUrl) {
                  <a
                    [href]="project.liveUrl"
                    target="_blank"
                    rel="noreferrer"
                    class="font-mono text-[11px] hover:underline text-emerald-600 dark:text-emerald-400 flex items-center gap-1"
                  >
                    Demo ↗
                  </a>
                }
              </div>
            </div>
            <h3 class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mt-0.5">
              {{ project.title }}
            </h3>
            <p class="text-sm text-mono-muted mt-1 leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-1.5 mt-3">
              @for (tag of project.tags; track tag) {
                <span
                  class="font-mono text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-mono-borderLight dark:border-mono-borderDark"
                >
                  {{ tag }}
                </span>
              }
            </div>
          </article>
        }
      </div>
    </app-modal-dialog>
  `
})
export class ProjectsModalComponent {
  readonly isOpen = input<boolean>(false);
  readonly projects = input.required<readonly ProjectItem[]>();
  readonly closed = output<void>();
}
