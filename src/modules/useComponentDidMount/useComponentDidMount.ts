import { useEffect, useRef } from 'react';

function useComponentDidMount(callback: () => void | (() => void)) {
  const isMount = useRef(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isMount.current) {
      const unmount = callback();
      isMount.current = true;
      return unmount;
    }
  }, [callback]);
}

export default useComponentDidMount;
