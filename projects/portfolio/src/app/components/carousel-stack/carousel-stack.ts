import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  contentChild,
  effect,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
  TemplateRef,
  viewChildren,
} from '@angular/core';
import { Observer } from 'gsap/Observer';
import { gsap } from 'gsap';

@Component({
  selector: 'pf-carousel-stack',
  imports: [
    NgTemplateOutlet,
  ],
  templateUrl: './carousel-stack.html',
  styleUrl: './carousel-stack.scss',
  host: {
    class: 'flex w-full no-scrollbar',
  },
})
export class CarouselStack<
  T extends {
    id?: number;
    visible?: boolean;
  },
> implements OnDestroy
{
  el = inject<ElementRef<HTMLElement>>(ElementRef);

  @HostListener('mouseenter')
  onMouseenter() {
    this.animations.forEach((a) => a.pause());
  }

  @HostListener('mouseleave')
  onLeaveenter() {
    this.animations.forEach((a) => a.play());
  }

  items = input<T[]>();

  itemTemplate = contentChild('itemTemplate', {
    descendants: true,
    read: TemplateRef,
  });

  itemsContainer = viewChildren<ElementRef<HTMLDivElement>>('itemsContainer');

  animations: Animation[] = [];

  constructor() {
    effect(() => {
      const itemsContainer = this.itemsContainer();
      const items = this.items();
      if (!itemsContainer?.length || !items?.length) {
        return;
      }

      const keyFrames: Keyframe[] = [
        {
          transform: 'translateX(0%)',
        },
        {
          transform: 'translateX(-100%)',
        },
      ];
      const options: KeyframeAnimationOptions = {
        easing: 'linear',
        duration: items.length * 1000,
        iterations: 100,
      };

      itemsContainer.forEach(({ nativeElement: el }) => {
        this.animations.push(el.animate(keyFrames, options));
      });
      // let progress = 0;
      // Observer.create({
      //   type: 'pointer,touch',
      //   wheelSpeed: -1,
      //   target: this.el.nativeElement,
      //   debounce: true,
      //   tolerance: 50,
      //   preventDefault: true,
      //   onChangeX: (e) => {
      //     progress += e.deltaY * 0.001;
      //     progress = gsap.utils.clamp(0, 1, progress);
      //
      //     this.animations.forEach((a) => {
      //       // @ts-ignore-next
      //       a.currentTime = progress * a.effect.getTiming().duration;
      //       console.log(progress);
      //     });
      //   },
      // });
    });
  }

  ngOnDestroy(): void {
    this.animations.forEach((a) => a.cancel());
  }
}
