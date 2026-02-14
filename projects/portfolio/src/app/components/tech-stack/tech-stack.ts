import { Component, computed, HostListener, input, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'pf-tech-stack',
  imports: [NgIcon],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStack {

  @HostListener('mouseenter', ['$event'])
  mouseEnter(event: Event) {
    (event.target as HTMLElement).classList.add('hovered');
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave(event: Event) {
    (event.target as HTMLElement).classList.remove('hovered');
  }

  name = input<string>();

  icon = input<string>();

  nameArr = computed(() => this.name()?.split('') ?? []);

  hovered = signal<boolean>(false);

}
