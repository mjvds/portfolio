import {
  Component,
  HostBinding,
  HostListener,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'pf-hamburger',
  imports: [],
  templateUrl: './hamburger.html',
  styleUrl: './hamburger.scss',
})
export class Hamburger {
  @HostListener('click')
  onClickEvent() {
    const isActive = this.isActive();
    this.isActive.set(!isActive);
    this.onClick.emit(!isActive);
  }

  @HostBinding('class.active') get classActive() {
    return this.isActive();
  }

  isActive = signal(false);

  onClick = output<boolean>();

  toggle(): void {
    this.isActive.update((value) => !value);
  }

}
