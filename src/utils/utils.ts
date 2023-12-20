export function debounce<T = any>(
  callback: (...params: Array<T>) => void,
  delay: number,
) {
  let timerId: null | NodeJS.Timeout = null;

  return (...params: Array<T>) => {
    if (timerId !== null) clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...params);
    }, delay);
  };
}

export function throttle<T = any>(
  callback: (...params: Array<T>) => void,
  delay: number,
) {
  let inThrottle: boolean | null = null;

  return (...params: Array<T>) => {
    if (!inThrottle) {
      callback(...params);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, delay);
    }
  };
}

export function deepClone(value: any) {
  return structuredClone(value);
}
