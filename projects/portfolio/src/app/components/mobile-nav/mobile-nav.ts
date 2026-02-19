import {
  Component,
  effect,
  ElementRef,
  output,
  viewChildren,
} from '@angular/core';
import { SplitText } from 'gsap/SplitText';
import { gsap } from 'gsap';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'pf-mobile-nav',
  imports: [
    NgIcon,
  ],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.scss',
  host: {
    class: 'gap-5'
  }
})
export class MobileNav {
  animatedText = viewChildren<ElementRef<HTMLElement>>('animatedText');

  onHiding = output<void>();

  onItemClick = output<number>();

  onButtonClick = output<string>();

  constructor() {
    effect(() => {
      const animatedText = this.animatedText().map((t) => t.nativeElement);
      SplitText.create(animatedText, {
        type: 'chars',
        mask: 'chars',
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self.chars, {
            duration: 1,
            y: -100,
            autoAlpha: 0,
            ease: 'power2',
            stagger: {
              each: 0.03,
              from: 'random',
            },
          });
        },
      });
    });
  }

  itemClicked(sectionIndex: number): void {
    this.onItemClick.emit(sectionIndex);
    this.onHiding.emit();
  }

  buttonClick(type: string): void {
    this.onButtonClick.emit(type);
  }
}
