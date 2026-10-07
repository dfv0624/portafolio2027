import { Component, input, output } from '@angular/core';
import { ProjectItem } from '../../core/models/portfolio.model';
import { ModalDialogComponent } from './modal-dialog.component';
import { TechPillComponent } from '../tech-pill/tech-pill.component';

@Component({
  selector: 'app-projects-modal',
  imports: [ModalDialogComponent, TechPillComponent],
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
                    class="font-mono text-[11px] font-medium hover:underline text-emerald-700 dark:text-emerald-400 flex items-center gap-1"
                  >
                    Sitio Web ↗
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
            <div class="flex flex-wrap items-center gap-1.5 mt-3 pt-1">
              @for (tag of project.tags; track tag) {
                <app-tech-pill [label]="tag" />
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
