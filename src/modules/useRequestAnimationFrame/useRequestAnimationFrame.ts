import { useEffect, useRef } from 'react';

function useRequestAnimationFrame(callback: (t: number) => void) {
  const reqRef = useRef<number>(-1);
  const prevTimeRef = useRef<number>(0);

  useEffect(() => {
    const animate = (time: number) => {
      if (prevTimeRef.current) callback(time - prevTimeRef.current);
      prevTimeRef.current = time;
      reqRef.current = requestAnimationFrame(animate);
    };

    reqRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(reqRef.current);
    };
  }, [callback]);
}

export default useRequestAnimationFrame;
