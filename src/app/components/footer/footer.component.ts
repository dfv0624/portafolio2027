import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  host: {
    class: 'w-full block z-20'
  },
  template: `
    <footer class="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-mono-muted border-t border-mono-borderLight dark:border-mono-borderDark pt-4 gap-3">
      <div>&copy; {{ currentYear }} dfv0624.com</div>

      <nav aria-label="Enlaces sociales y contacto" class="flex items-center gap-4 sm:gap-6">
        <!-- Icono Animado GitHub -->
        <a
          href="https://github.com/dfv0624"
          target="_blank"
          rel="noreferrer"
          aria-label="Perfil de GitHub de Daniel Vásquez"
          title="GitHub"
          class="group p-1.5 -m-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 inline-flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:rotate-6"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        </a>

        <!-- Icono Animado LinkedIn -->
        <a
          href="https://linkedin.com/in/dfv0624"
          target="_blank"
          rel="noreferrer"
          aria-label="Perfil de LinkedIn de Daniel Vásquez"
          title="LinkedIn"
          class="group p-1.5 -m-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 inline-flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:-rotate-6"
            aria-hidden="true"
          >
            <path
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
            />
          </svg>
        </a>

        <!-- Correo Electrónico -->
        <a
          href="mailto:dfv.0624@hotmail.com"
          class="text-neutral-900 dark:text-neutral-100 font-medium hover:underline focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 transition-colors"
        >
          dfv.0624&#64;hotmail.com
        </a>
      </nav>
    </footer>
  `
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
