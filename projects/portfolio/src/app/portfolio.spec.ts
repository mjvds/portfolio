import { TestBed } from '@angular/core/testing';
import { Portfolio } from './portfolio';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Portfolio);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(Portfolio);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, portfolio');
  });
});
