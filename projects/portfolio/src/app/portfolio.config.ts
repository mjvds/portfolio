import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import {
  diIonicOriginal,
  diJasmineOriginal,
  diSassOriginal,
  diTailwindcssOriginal,
} from '@ng-icons/devicon/original';
import {
  diAngularjsPlain,
  diAngularmaterialPlain,
  diAngularPlain,
  diArchlinuxPlain,
  diBashPlain,
  diBootstrapPlain,
  diCss3Plain,
  diDotnetcorePlain,
  diGithubactionsPlain,
  diGitPlain,
  diHtml5Plain,
  diJavascriptPlain,
  diJiraPlain,
  diLuaPlain,
  diNeovimPlain,
  diNgrxPlain,
  diTypescriptPlain,
} from '@ng-icons/devicon/plain';
import { jamGoogle, jamLinkedin, jamSun } from '@ng-icons/jam-icons';
import { matMenuOutline } from '@ng-icons/material-icons/outline';
import { gsapIcon } from './icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
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
      diGithubactionsPlain,
    }),
  ],
};
