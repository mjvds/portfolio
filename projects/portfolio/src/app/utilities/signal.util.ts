import { computed, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, fromEvent, map, startWith } from 'rxjs';

export const debouncedEffect = <T>(
  sig: () => T,
  delay: number,
  callback: (val: T) => void,
) => {
  let timeout: any;
  return computed(() => {
    const val = sig();
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => callback(val), delay);
  });
};

export enum ResponsiveSize {
  XS = 300, // just random value since XS is less than SM
  SM = 640,
  MD = 768,
  LG = 1024,
  XL = 1280,
}

export enum ResponsiveName {
  XS,
  SM,
  MD,
  LG,
  XL,
}

export const resizeObserverFactory = (debounce = 250): Signal<ResponsiveName | undefined> => {
  const mapSize = () => {
    const width = window.innerWidth;
    if (width >= ResponsiveSize.XL) {
      return ResponsiveName.XL;
    } else if (width >= ResponsiveSize.LG) {
      return ResponsiveName.LG;
    } else if (width >= ResponsiveSize.MD) {
      return ResponsiveName.MD;
    } else if (width >= ResponsiveSize.SM) {
      return ResponsiveName.SM;
    } else {
      return ResponsiveName.XS;
    }
  };
  const obs = fromEvent(window, 'resize').pipe(
    startWith(null),
    debounceTime(debounce),
    map(() => mapSize()),
  );
  return toSignal(obs);
};
