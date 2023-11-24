import { useRef } from 'react';

function useThrottle<T extends Array<any>>(
  callback: (...params: T) => void,
  delay: number,
) {
  const inThrottle = useRef<boolean | null>(null);

  return (...params: T) => {
    if (!inThrottle.current) {
      callback(...params);
      inThrottle.current = true;

      setTimeout(() => {
        inThrottle.current = false;
      }, delay);
    }
  };
}

export default useThrottle;
