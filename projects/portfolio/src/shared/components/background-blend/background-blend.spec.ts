import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundBlend } from './background-blend';

describe('BackgroundBlend', () => {
  let component: BackgroundBlend;
  let fixture: ComponentFixture<BackgroundBlend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundBlend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundBlend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
