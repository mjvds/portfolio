import { Component, HostListener, input, signal } from '@angular/core';

@Component({
  selector: 'pf-vertical-text-color-change',
  imports: [],
  templateUrl: './vertical-text-color-change.html',
  styleUrl: './vertical-text-color-change.scss',
})
export class VerticalTextColorChange {
  @HostListener('mouseenter')
  mouseEnter() {
    this.hovered.set(true);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.hovered.set(false);
  }

  text = input<string>();

  hovered = signal(false);

  link = input<string>();

  downloadable = input<boolean>(false);

}
