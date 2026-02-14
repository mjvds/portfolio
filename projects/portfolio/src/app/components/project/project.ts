import { NgStyle } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  input,
  viewChild,
  viewChildren,
} from '@angular/core';
import { SectionComponent } from '@portfolio/portfolio';
import { JobData } from '@portfolio/job-data';
import { NgIcon } from '@ng-icons/core';
import { TechStack } from '../tech-stack/tech-stack';

@Component({
  selector: 'pf-project',
  imports: [
    TechStack,
  ],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project implements SectionComponent {
  jobData = input<JobData>();

  container = viewChild<ElementRef<HTMLElement>>('container');

  el = inject<ElementRef<HTMLElement>>(ElementRef);

  animatedChars = viewChildren<ElementRef<HTMLElement>>('animatedText');

  animatedWords = viewChildren<ElementRef<HTMLElement>>('animatedWords');

  techStack = viewChildren<ElementRef<HTMLElement>>('techStack');
}
