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
  diAngularjsOriginal,
  diAngularmaterialOriginal,
  diAngularOriginal,
  diArchlinuxOriginal,
  diBashOriginal,
  diBootstrapOriginal,
  diCss3Original,
  diDotnetcoreOriginal,
  diGithubactionsOriginal,
  diGitOriginal,
  diHtml5Original,
  diJavascriptOriginal,
  diJiraOriginal,
  diLuaOriginal,
  diNeovimOriginal,
  diNgrxOriginal,
  diTypescriptOriginal,
} from '@ng-icons/devicon/original';
import { jamGoogle, jamLinkedin, jamSun } from '@ng-icons/jam-icons';
import { matMenuOutline } from '@ng-icons/material-icons/outline';
import {
  pfIconAkita,
  pfIconDevextreme,
  pfIconSignalR,
  pfIconGsap,
  pfIconElf,
} from './icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideIcons({
      jamLinkedin,
      jamGoogle,
      diAngularjsOriginal,
      diCss3Original,
      diJavascriptOriginal,
      diHtml5Original,
      diAngularOriginal,
      diTypescriptOriginal,
      diAngularmaterialOriginal,
      diBootstrapOriginal,
      diSassOriginal,
      diDotnetcoreOriginal,
      diNgrxOriginal,
      diBashOriginal,
      diIonicOriginal,
      diArchlinuxOriginal,
      diLuaOriginal,
      diGitOriginal,
      diNeovimOriginal,
      diJiraOriginal,
      diTailwindcssOriginal,
      jamSun,
      matMenuOutline,
      diJasmineOriginal,
      diGithubactionsOriginal,

      pfIconAkita,
      pfIconDevextreme,
      pfIconSignalR,
      pfIconGsap,
      pfIconElf,
    }),
  ],
};
