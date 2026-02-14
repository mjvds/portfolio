import {
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  model,
  signal,
} from '@angular/core';

@Component({
  selector: 'pf-project-item',
  templateUrl: './project-item.html',
  styleUrl: './project-item.scss',
})
export class ProjectItem {
  // @HostBinding('style.--scroll-percentage') get styleScroll() {
  //   return this.itemScrollPercentage() + '%';
  // }

  yearStart = input<number>();

  yearEnd = input<number>();

  company = input<string>();

  projectName = input<string>();

  techStack = input<string[]>();

  visible = model(true);

  id = input<number>();

  index = input<number>(0);

  totalItems = input<number>(0);

  scrollPercentage = input<number>();

  animationDirection = model<'up' | 'down'>();

  cdr = inject(ChangeDetectorRef);

  currentTemplateIndex = signal<number | null>(null);

  templateIndex = signal<number | null>(null);

  el = inject<ElementRef<HTMLElement>>(ElementRef);

  itemScrollPercentage = signal<number>(0);

  detectChanges(): void {
    this.cdr.detectChanges();
  }

  animationDirectionClass = computed(() => {
    return `animation-direction-${this.animationDirection()}`;
  });

  constructor() {
    effect(() => {
      if (this.visible()) {
        const percentage = this.getBoxRelativeProgress(
          this.scrollPercentage() ?? 0,
        );
        this.itemScrollPercentage.set(percentage);
      }
    });
  }

  getBoxRelativeProgress(scrollPercent: number) {
    const boxSize = 100 / this.totalItems(); // 25
    const start = this.index() * boxSize; // 0,25,50,75
    const end = start + boxSize; // 25,50,75,100
    // clamp inside that box
    const clamped = Math.min(Math.max(scrollPercent, start), end);
    // convert to 0..100 within the box
    return ((clamped - start) / boxSize) * 100;
  }
}
