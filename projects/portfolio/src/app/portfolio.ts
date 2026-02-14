import {
  AnimationCallbackEvent,
  ChangeDetectorRef,
  Component,
  computed,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  input,
  NgZone,
  OnInit,
  Renderer2,
  Signal,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';
import { Contact } from './components/contact/contact';
import { Hamburger } from './components/hamburger/hamburger';
import { Introduction } from './components/introduction/introduction';
import { MobileNav } from './components/mobile-nav/mobile-nav';
import { Project } from './components/project/project';
import { jobData, JobData } from './job-data';
import { resizeObserverFactory, ResponsiveName } from './utilities/signal.util';

gsap.registerPlugin(Observer, SplitText);

export interface SectionComponent {
  container: Signal<ElementRef<HTMLElement> | undefined>;
  el: ElementRef<HTMLElement>;
  animatedChars: Signal<readonly ElementRef<HTMLElement>[]>;
  animatedWords?: Signal<readonly ElementRef<HTMLElement>[]>;
  techStack?: Signal<readonly ElementRef<HTMLElement>[]>;
}

enum AnimationDirection {
  Up,
  Down,
}

enum ColorScheme {
  Light = 'light',
  Dark = 'dark',
}

@Component({
  selector: 'pf-root',
  imports: [
    NgIcon,
    Project,
    Introduction,
    Contact,
    Hamburger,
    MobileNav,
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  animationIndicator = viewChild<ElementRef<HTMLElement>>('animationIndicator');

  hamburder = viewChild(Hamburger);

  projects = viewChildren(Project);

  cdr = inject(ChangeDetectorRef);

  renderer = inject(Renderer2);

  docs = inject(DOCUMENT);

  ngZone = inject(NgZone);

  jobData = input<JobData>();

  jobs = jobData;

  logoIsHovered = false;

  currentVisibleIndex = signal(0);

  animationDirection = signal<AnimationDirection>(AnimationDirection.Up);

  projectsDescription = computed(() => {
    return this.jobs.map((j) => {
      return {
        id: j.id,
        name: j.projectName,
        year: j.yearStart,
      };
    });
  });

  isAnimating = false;

  animationDuration = 1.25;

  previousVisibleIndex: number | null = null;

  projectIsActive = computed(() => {
    const currentIndex = this.currentVisibleIndex();
    if (currentIndex >= 1 && currentIndex <= this.jobs.length) {
      return true;
    }
    return false;
  });

  isSmallViewport = computed(() => {
    const size = this.responsiveObservable();
    switch (size) {
      case ResponsiveName.SM:
      case ResponsiveName.XS:
        return true;
    }
    return false;
  });

  showSideYearIndicator = computed(() => {
    if (this.isSmallViewport()) {
      return false;
    }
    return this.projectIsActive();
  });

  activeProjectId = computed(() => {
    const currentVisibleIndex = this.currentVisibleIndex();
    return this.jobs.at(currentVisibleIndex - 1)?.id ?? 0;
  });

  contactIsActive = computed(
    () => this.currentVisibleIndex() === this.jobs.length + 1,
  );

  responsiveObservable = resizeObserverFactory();

  constructor() {
    effect(() => {
      switch (this.responsiveObservable()) {
        case ResponsiveName.XS:
        case ResponsiveName.SM:
          this.docs.documentElement.style.setProperty('--pf-spacing', '0vh');
          break;
        default:
          this.docs.documentElement.style.setProperty('--pf-spacing', '2.5vh');
          break;
      }
    });
  }

  ngOnInit(): void {
    Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () => this.onDown(),
      onUp: () => this.onUp(),
      debounce: true,
      tolerance: 10,
      preventDefault: true,
    });
  }

  onDown(): void {
    if (this.isAnimating) {
      return;
    }
    this.animationDirection.set(AnimationDirection.Down);
    this.previousSection();
  }

  onUp(): void {
    if (this.isAnimating) {
      return;
    }
    this.animationDirection.set(AnimationDirection.Up);
    this.nextSection();
  }

  nextSection(): void {
    const currentIndex = this.currentVisibleIndex();
    const nextIndex =
      currentIndex < this.jobs.length + 1 ? currentIndex + 1 : currentIndex;

    if (nextIndex === currentIndex) {
      return;
    }
    this.isAnimating = true;
    this.currentVisibleIndex.set(nextIndex);
    this.cdr.detectChanges();
  }

  previousSection(): void {
    const currentIndex = this.currentVisibleIndex();
    const nextIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    if (currentIndex === nextIndex) {
      return;
    }
    this.isAnimating = true;
    this.currentVisibleIndex.update((value) => (value > 0 ? value - 1 : value));
    this.cdr.detectChanges();
  }

  enterFn(event: AnimationCallbackEvent, component: SectionComponent): void {
    const target = event.target as HTMLElement;
    // target.style.zIndex = '1';
    const translateY =
      this.animationDirection() === AnimationDirection.Up ? '5%' : '-5%';
    const clipPath =
      this.animationDirection() === AnimationDirection.Up
        ? 'inset(100% 0% 0% 0%)'
        : 'inset(0% 0% 100% 0%)';
    gsap.from(target, {
      duration: this.animationDuration,
      clipPath,
      ease: 'power2',
    });
    gsap.fromTo(
      component.container()?.nativeElement!,
      {
        translateY: translateY,
        duration: 0,
      },
      {
        translateY: '0%',
        duration: this.animationDuration,
        opacity: 1,
        ease: 'power1.inOut',
        onComplete: () => {
          this.isAnimating = false;
          this.cdr.detectChanges();
        },
      },
    );

    const chars = component.animatedChars().map((e) => e.nativeElement);
    const yDirection =
      this.animationDirection() === AnimationDirection.Up ? 100 : -100;
    if (chars?.length) {
      SplitText.create(chars, {
        type: 'chars',
        mask: 'chars',
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self.chars, {
            duration: this.animationDuration,
            y: yDirection,
            autoAlpha: 0,
            ease: 'power2',
            stagger: {
              each: 0.02,
              from: 'random',
            },
          });
        },
      });
    }

    const words = component.animatedWords?.()?.map((e) => e.nativeElement);
    if (words?.length) {
      SplitText.create(words, {
        type: 'words',
        mask: 'words',
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self.words, {
            duration: this.animationDuration,
            y: yDirection,
            autoAlpha: 0,
            ease: 'power2',
            stagger: {
              each: 0.02,
              from: 'random',
            },
          });
        },
      });
    }
    target.style.opacity = '1';
  }

  /**
   * clip-path: inset(top to bottom, left, bottom to top, right)
   */
  leaveFn(event: AnimationCallbackEvent, component: SectionComponent): void {
    const target = event.target as HTMLElement;
    // target.style.zIndex = '0';

    const translateY =
      this.animationDirection() === AnimationDirection.Up ? '-15%' : '15%';
    const clipPath =
      this.animationDirection() === AnimationDirection.Up
        ? 'inset(0% 0% 100% 0%)'
        : 'inset(100% 0% 0% 0%)';
    gsap.to(target, {
      duration: this.animationDuration,
      clipPath,
      ease: 'power2',
    });
    gsap.fromTo(
      component.container()?.nativeElement!,
      {
        translateY: '0%',
        duration: 0,
      },
      {
        translateY,
        duration: this.animationDuration,
      },
    );

    const top = this.animationDirection() === AnimationDirection.Up ? 100 : 0;
    gsap.fromTo(
      this.animationIndicator()?.nativeElement!,
      {
        duration: this.animationDuration,
        top: `${top}%`,
        ease: 'power2',
      },
      {
        duration: this.animationDuration,
        top: `${top === 100 ? 0 : 98}%`,
        ease: 'power2',
        onComplete: () => {
          this.isAnimating = false;
          this.cdr.detectChanges();
        },
      },
    );
  }

  gotoSectionByIndex(nextIndex: number): void {
    const currentVisibleIndex = this.currentVisibleIndex();
    if (currentVisibleIndex === nextIndex) {
      return;
    }
    const direction =
      currentVisibleIndex < nextIndex
        ? AnimationDirection.Down
        : AnimationDirection.Up;
    this.animationDirection.set(direction);
    this.isAnimating = true;
    this.currentVisibleIndex.set(nextIndex);
    this.cdr.detectChanges();
  }

  toggleColorScheme() {
    const currentColorScheme = this.currentColorScheme();
    switch (currentColorScheme) {
      case ColorScheme.Dark:
        this.docs.documentElement.setAttribute(
          'pf-color-scheme',
          ColorScheme.Light,
        );
        break;
      case ColorScheme.Light:
        this.docs.documentElement.setAttribute(
          'pf-color-scheme',
          ColorScheme.Dark,
        );
        break;
    }
  }

  currentColorScheme(): ColorScheme {
    const manualColorScheme =
      this.docs.documentElement.getAttribute('pf-color-scheme');
    if (manualColorScheme) {
      return manualColorScheme as ColorScheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? ColorScheme.Dark
      : ColorScheme.Light;
  }

  onMobileItemClick(sectionIndex: number): void {
    switch (sectionIndex) {
      case 1: // Project section
        this.gotoSectionByIndex(1);
        break;
      case 2: // Contact section
        this.gotoSectionByIndex(this.jobs.length + 1);
        break;
    }
    this.hamburder()?.toggle();
  }

  onMobileButtonClick(type: string): void {
    switch (type) {
      case 'color-scheme':
        this.toggleColorScheme();
        break;
    }
  }
}
