import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number) {
  const c = useRef(callback);

  useEffect(() => {
    c.current = callback;
  }, [callback]);

  useEffect(() => {
    const id = setInterval(c.current, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
}

export default useInterval;
