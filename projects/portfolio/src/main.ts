import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/portfolio.config';
import { Portfolio } from './app/portfolio';

bootstrapApplication(Portfolio, appConfig)
  .catch((err) => console.error(err));
