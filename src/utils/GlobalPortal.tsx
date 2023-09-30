import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children?: ReactNode;
};

function GlobalPortal({ children }: Props) {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRoot(document.querySelector('body'));
  }, []);

  return root && createPortal(children, root);
}

export default GlobalPortal;
