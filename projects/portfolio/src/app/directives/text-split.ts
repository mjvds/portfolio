import { DestroyRef, Directive, effect, ElementRef, inject, input, OnInit, Renderer2 } from '@angular/core';
import { SplitText } from 'gsap/SplitText';
import { gsap } from "gsap";

@Directive({
  selector: '[pfTextSplit]',
})
export class TextSplit {

  el = inject(ElementRef);

  renderer = inject(Renderer2);

  destroyRef = inject(DestroyRef);

  startTrigger = input<string>('mouseenter');

  endTrigger = input<string | null>(null);

  startTriggerListener: (() => void) | null = null;

  endTriggerListener: (() => void) | null = null;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.startTriggerListener?.();
      this.endTriggerListener?.();
    });

    effect(() => {
      if (this.startTriggerListener) {
        this.startTriggerListener();
        this.startTriggerListener = null;
      }

      const split = SplitText.create(this.el.nativeElement, {
        type: 'chars',
        mask: 'chars',
      });
      this.startTriggerListener = this.renderer.listen(this.el.nativeElement, this.startTrigger(), () => {
        gsap.fromTo(split.chars,
                    { y: -20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.6,
                      ease: "power2.out",
                      repeat: 1,
                      repeatDelay: 0.2
                    }
                   );
      });
    });
  }

}
