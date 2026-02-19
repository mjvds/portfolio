import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselStack } from './carousel-stack';

describe('CarouselStack', () => {
  let component: CarouselStack;
  let fixture: ComponentFixture<CarouselStack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselStack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselStack);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
