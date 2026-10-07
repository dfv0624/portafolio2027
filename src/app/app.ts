import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreviewCardComponent } from './components/preview-card/preview-card.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { ProjectsModalComponent } from './components/modals/projects-modal.component';
import { StackModalComponent } from './components/modals/stack-modal.component';
import { AboutModalComponent } from './components/modals/about-modal.component';
import { ContactModalComponent } from './components/modals/contact-modal.component';
import {
  MENU_ITEMS,
  PREVIEW_MAP,
  PROJECTS_DATA,
  STACK_CATEGORIES
} from './core/data/portfolio.data';
import { ModalType, PreviewData } from './core/models/portfolio.model';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    PreviewCardComponent,
    NavigationMenuComponent,
    ProjectsModalComponent,
    StackModalComponent,
    AboutModalComponent,
    ContactModalComponent
  ],
  host: {
    class: 'min-h-full lg:h-full flex flex-col justify-between w-full max-w-7xl mx-auto'
  },
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly menuItems = MENU_ITEMS;
  protected readonly projectsData = PROJECTS_DATA;
  protected readonly stackCategories = STACK_CATEGORIES;

  protected readonly activePreviewId = signal<ModalType>('projects');
  protected readonly activeModal = signal<ModalType | null>(null);

  protected readonly currentPreview = computed<PreviewData>(
    () => PREVIEW_MAP[this.activePreviewId()]
  );

  protected onHoverPreview(id: ModalType): void {
    this.activePreviewId.set(id);
  }

  protected onOpenModal(id: ModalType): void {
    this.activeModal.set(id);
  }

  protected onCloseModal(): void {
    this.activeModal.set(null);
  }
}
