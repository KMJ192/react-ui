import type { RadioProps } from './Radio';

const getStyle = ({
  size,
  pupilSize,
}: Pick<RadioProps, 'size' | 'pupilSize'>) => {
  let markSize;
  let childrenSize;
  let pupilSz;

  const isSize = typeof size === 'number';
  const isPupilSize = typeof pupilSize === 'number';

  if (isSize) {
    markSize = {
      width: size,
      height: size,
    };
    childrenSize = {
      fontSize: size,
    };
  }
  if (isPupilSize) {
    pupilSz = {
      width: pupilSize,
      height: pupilSize,
    };
  }

  return {
    markSize,
    childrenSize,
    pupilSz,
  };
};

export { getStyle };
