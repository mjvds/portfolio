import {
  Component,
  ElementRef,
  inject,
  viewChild,
  viewChildren,
} from '@angular/core';
import { SectionComponent } from '@portfolio/portfolio';
import { VerticalTextColorChange } from '../../../shared/components/vertical-text-color-change/vertical-text-color-change';

@Component({
  selector: 'pf-contact',
  imports: [
    VerticalTextColorChange,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements SectionComponent {
  container = viewChild<ElementRef<HTMLElement>>('container');

  el = inject<ElementRef<HTMLElement>>(ElementRef);

  animatedChars = viewChildren<ElementRef<HTMLElement>>('animatedText');

  linkedIn = 'https://www.linkedin.com/in/mjvdelossantos/';

  jobstreet =
    'https://ph.jobstreet.com/profiles/markjay-delossantos-hyrG2gb4L8';

  resume = 'MarkJayDelosSantos.pdf';
}
