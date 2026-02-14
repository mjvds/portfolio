import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'pf-text-transition-y',
  imports: [],
  templateUrl: './text-transition-y.html',
  styleUrl: './text-transition-y.scss',
})
export class TextTransitionY {

  @HostBinding('style.--pf-active-color') get styleActiveColor() {
    return this.activeColor();
  }

  @HostBinding('style.--pf-inactive-color') get styleInactiveColor() {
    return this.inactiveColor();
  }

  activeColor = input<string>();

  inactiveColor = input<string>();

  active = input<boolean>(false);

  text = input<string>();

}
