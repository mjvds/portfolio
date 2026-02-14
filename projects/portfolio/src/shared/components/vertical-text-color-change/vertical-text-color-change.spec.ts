import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTextColorChange } from './vertical-text-color-change';

describe('VerticalTextColorChange', () => {
  let component: VerticalTextColorChange;
  let fixture: ComponentFixture<VerticalTextColorChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalTextColorChange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalTextColorChange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
