import { useRef } from 'react';

function useDebounce<T extends Array<any>>(
  callback: (...params: T) => void,
  delay: number,
) {
  const timerId = useRef<NodeJS.Timeout | null>(null);

  return (...params: T) => {
    if (timerId.current) clearTimeout(timerId.current);

    timerId.current = setTimeout(() => {
      callback(...params);
      timerId.current = null;
    }, delay);
  };
}

export default useDebounce;
