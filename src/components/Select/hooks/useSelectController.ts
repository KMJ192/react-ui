import { useEffect, useRef, useState } from 'react';
import type { SelectOption } from '../types';
import useClickAway from '@src/modules/useClickAway/useClickAway';

type Params = {
  initSelectedIdx?: number;
  readonly optionList?: ReadonlyArray<SelectOption>;
};

function useSelectController({
  initSelectedIdx = -1,
  optionList = [],
}: Params) {
  const [open, setOpen] = useState<boolean>(false);
  const [reserveIdx, setReserveIdx] = useState<number>(initSelectedIdx);
  const [selectedIdx, setSelectedIdx] = useState<number>(initSelectedIdx);
  const selectRef = useRef<HTMLDivElement>(null);
  const dropboxRef = useRef<HTMLUListElement>(null);

  const scrollTo = (idx: number) => {
    if (idx < 0) return;
    if (!dropboxRef.current) return;
    const dropbox = dropboxRef.current;
    const { height } = (
      dropbox.childNodes[idx] as HTMLElement
    ).getBoundingClientRect();

    dropbox.scrollTo({
      top: height * idx,
      behavior: 'smooth',
    });
  };

  // const updateOpen = (isOpen: boolean | ((open: boolean) => boolean)) => {
  //   setOpen(isOpen);
  // };

  // const updateReserve = (isHover: number | ((hover: number) => number)) => {
  //   setReserveIdx(isHover);
  // };

  // const updateSelectedIdx = (
  //   isSelected: number | ((selected: number) => number),
  // ) => {
  //   setSelectedIdx(isSelected);
  // };

  const onClickOption = (idx: number) => {
    if (!optionList[idx].disabled) {
      setSelectedIdx(idx);
      setReserveIdx(idx);
      scrollTo(idx);
      setOpen(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!dropboxRef.current) return;

    const { key } = e;

    if ((key === 'ArrowDown' || key === 'ArrowUp') && !open) {
      setOpen(true);
      return;
    }
    const len = optionList.length;

    if (key === 'ArrowDown') {
      let endFlag = 0;
      let next = 0;
      next = reserveIdx === -1 ? 0 : reserveIdx + 1;
      if (next >= len) next = 0;
      while (optionList[next].disabled) {
        endFlag++;
        next += 1;

        if (next >= len) next = 0;

        if (endFlag > len) return;
      }
      setReserveIdx(next);
      scrollTo(next);
      return;
    }

    if (key === 'ArrowUp') {
      let endFlag = 0;
      let next = reserveIdx - 1;
      if (next < 0) next = len - 1;

      while (optionList[next].disabled) {
        endFlag++;
        next -= 1;
        if (next < 0) next = len - 1;

        if (endFlag > len) return;
      }
      setReserveIdx(next);
      scrollTo(next);
      return;
    }

    if (key === 'Enter') {
      setOpen(!open);
      setSelectedIdx(reserveIdx);
      scrollTo(reserveIdx);
      return;
    }

    if (key === 'Escape') {
      setReserveIdx(selectedIdx);
      setOpen(false);
      scrollTo(selectedIdx);
    }
  };

  const onClickSelect = () => {
    setOpen(true);
  };

  const onClickAway = () => {
    setReserveIdx(selectedIdx);
    setOpen(false);
    scrollTo(selectedIdx);
  };

  useClickAway({ onClickAway, elementRefs: [selectRef, dropboxRef] });

  useEffect(() => {
    const initialize = () => {
      setSelectedIdx(initSelectedIdx);
      setReserveIdx(initSelectedIdx);
    };
    initialize();
  }, [initSelectedIdx]);

  return {
    open,
    selectedIdx,
    reserveIdx,
    optionList,
    onClickSelect,
    onClickOption,
    onKeyDown,
    selectRef,
    dropboxRef,
  };
}

export default useSelectController;
