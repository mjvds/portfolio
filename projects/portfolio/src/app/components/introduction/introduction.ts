import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  inject,
  input,
  OnInit,
  viewChild,
  viewChildren,
} from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { JobDataTechStack, techStacks } from '@portfolio/job-data';
import { SectionComponent } from '@portfolio/portfolio';
import { CarouselStack } from '../carousel-stack/carousel-stack';

@Component({
  selector: 'pf-introduction',
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
  imports: [
    NgIcon,
    CarouselStack,
  ],
})
export class Introduction implements OnInit, SectionComponent {
  @HostBinding('style.--pf-carousel-count') get carouselCount() {
    return this.stacks.length;
  }

  container = viewChild<ElementRef<HTMLElement>>('container');

  techStackContent = viewChild<ElementRef<HTMLElement>>('techStackContent');

  techStackContents =
    viewChildren<ElementRef<HTMLElement>>('techStackContents');

  el = inject<ElementRef<HTMLElement>>(ElementRef);

  cdr = inject(ChangeDetectorRef);

  animatedChars = viewChildren<ElementRef<HTMLElement>>('animatedText');

  showBgIcon = input(true);

  techStacks = techStacks;

  rowAndGridLength = Math.floor(this.techStacks.length / 2);

  randomTechKeys: string[] = [];

  stacks = techStacks.sort((a, b) => b.icon.localeCompare(a.icon));

  stacksGrid: JobDataTechStack[][] = [];

  animatingElement: HTMLDivElement[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
