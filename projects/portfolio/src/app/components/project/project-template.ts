import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[pfProjectTemplate]',
})
export class ProjectTemplate {

  template = inject(TemplateRef<any>);

  pfProjectTemplate = input<string>('');

  constructor() { }

}
