import {
  Component,
  contentChild,
  effect,
  ElementRef,
  HostBinding,
  inject,
  input,
  Renderer2,
  signal,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'pf-background-blend',
  templateUrl: './background-blend.html',
  styleUrl: './background-blend.scss',
})
export class BackgroundBlend {
  @HostBinding('style.--blend-text-color') get blendTextColor() {
    return this.blendColor();
  }

  @HostBinding('style.--blend-bg-color') get blendBgColor() {
    return this.blendBg();
  }

  template = contentChild(TemplateRef);

  backgroundBlend = viewChild<ElementRef>('backgroundBlend');

  blendBg = input<string>();

  blendColor = input<string>();

  startAnimating = input<boolean>(false);

  el = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);

  viewContainer = inject(ViewContainerRef);

  renderer = inject(Renderer2);

  duplicateElementClass = signal<string>('');

  constructor() {
    effect(() => {
      if (!this.template() || !this.backgroundBlend()) {
        return;
      }

      const viewRef = this.viewContainer.createEmbeddedView(this.template()!);

      viewRef.rootNodes.forEach((node) => {
        this.renderer.appendChild(this.el.nativeElement, node);
        const cloneNode = node.cloneNode(true);

        const duplicateTemplateEl = this.renderer.createElement(
          'div',
        ) as HTMLElement;
        duplicateTemplateEl.className = 'duplicate-template';
        this.renderer.appendChild(duplicateTemplateEl, cloneNode);
        this.renderer.appendChild(node, duplicateTemplateEl);

        this.renderer.appendChild(node, this.backgroundBlend()?.nativeElement);
      });
    });
  }
}
