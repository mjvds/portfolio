import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { jamGoogle, jamLinkedin, jamSun } from '@ng-icons/jam-icons';
import { routes } from './portfolio.routes';
import {
  diAngularjsPlain,
  diCss3Plain,
  diJavascriptPlain,
  diHtml5Plain,
  diAngularPlain,
  diTypescriptPlain,
  diAngularmaterialPlain,
  diBootstrapPlain,
  diDotnetcorePlain,
  diNgrxPlain,
  diBashPlain,
  diArchlinuxPlain,
  diLuaPlain,
  diGitPlain,
  diNeovimPlain,
  diJiraPlain,
  diGithubactionsPlain,
} from '@ng-icons/devicon/plain';
import {
  diIonicOriginal,
  diJasmineOriginal,
  diSassOriginal,
  diTailwindcssOriginal,
} from '@ng-icons/devicon/original';
import { matMenuOutline } from '@ng-icons/material-icons/outline';
import { gsapIcon } from './icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIcons({
      jamLinkedin,
      jamGoogle,
      diAngularjsPlain,
      diCss3Plain,
      diJavascriptPlain,
      diHtml5Plain,
      diAngularPlain,
      diTypescriptPlain,
      diAngularmaterialPlain,
      diBootstrapPlain,
      diSassOriginal,
      diDotnetcorePlain,
      diNgrxPlain,
      diBashPlain,
      diIonicOriginal,
      diArchlinuxPlain,
      diLuaPlain,
      diGitPlain,
      diNeovimPlain,
      diJiraPlain,
      diTailwindcssOriginal,
      jamSun,
      matMenuOutline,
      gsapIcon,
      diJasmineOriginal,
      diGithubactionsPlain
    }),
  ],
};
