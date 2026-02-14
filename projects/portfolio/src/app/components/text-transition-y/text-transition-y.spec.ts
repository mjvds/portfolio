import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTransitionY } from './text-transition-y';

describe('TextTransitionY', () => {
  let component: TextTransitionY;
  let fixture: ComponentFixture<TextTransitionY>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextTransitionY]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTransitionY);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
