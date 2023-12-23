import { useEffect, useRef } from 'react';

function useTimeout(callback: () => void, delay: number) {
  const c = useRef(callback);

  useEffect(() => {
    c.current = callback;
  }, [callback]);

  useEffect(() => {
    const id = setTimeout(c.current, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay]);
}

export default useTimeout;
