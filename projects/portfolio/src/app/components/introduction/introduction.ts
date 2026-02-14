import {
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
import { JobDataTechStack, techStacks, techStacksGrouped } from '@portfolio/job-data';
import { SectionComponent } from '@portfolio/portfolio';

@Component({
  selector: 'pf-introduction',
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
  imports: [NgIcon]
})
export class Introduction implements OnInit, SectionComponent {

  @HostBinding('style.--pf-intro-bg-rows') get styleRows() {
    return this.rowAndGridLength;
  }

  @HostBinding('style.--pf-intro-bg-columns') get styleColumns() {
    return this.rowAndGridLength;
  }

  container = viewChild<ElementRef<HTMLElement>>('container');

  el = inject<ElementRef<HTMLElement>>(ElementRef);

  animatedChars = viewChildren<ElementRef<HTMLElement>>('animatedText');

  showBgIcon = input(true);

  techStacks = techStacks;

  rowAndGridLength = Math.floor(this.techStacks.length / 2);

  randomTechStacksPlacement: { [key: string]: JobDataTechStack } = {};

  randomTechKeys: string[] = [];

  techStacksGrouped = techStacksGrouped;

  stacks = Object.keys(this.techStacksGrouped);

  ngOnInit(): void {
    this.randomTechStacksPlacement = this.techStacks.reduce((prev, cur, index) => {
      const { row, column } = this.#generateRandomCoords(4, 96);
      cur.top = `${row}%`;
      cur.left = `${column}%`;
      prev[`${row}-${column}`] = cur;
      return prev;
    }, {} as { [key: string]: JobDataTechStack });
    this.randomTechKeys = Object.keys(this.randomTechStacksPlacement);
  }

  #generateRandomCoords(min: number, max: number): { row: number; column: number } {
    while (true) {
      const row = Math.floor(Math.random() * (max - min) + min);
      const column = Math.floor(Math.random() * (max - min) + min);
      if (!this.randomTechStacksPlacement[`${row}-${column}`]) {
        return { row, column };
      }
    }
  }

}
