export type ModalType = 'projects' | 'stack' | 'about' | 'contact';
export type HairlineFigureName =
  | 'riffle'
  | 'cabinet'
  | 'phone'
  | 'terrain'
  | 'exploded'
  | 'terminal'
  | 'patch';

export interface PreviewData {
  readonly id: ModalType;
  readonly figureName: HairlineFigureName;
  readonly badge: string;
  readonly caption: string;
  readonly tech: string;
  readonly alt: string;
}

export interface MenuItem {
  readonly id: ModalType;
  readonly number: string;
  readonly title: string;
  readonly actionLabel: string;
}

export interface ProjectItem {
  readonly year: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
}

export interface StackCategory {
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
}
