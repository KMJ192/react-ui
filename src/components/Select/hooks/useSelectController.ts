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
  // const [reserveIdx, setReserveIdx] = useState<number>(initSelectedIdx);
  // const [selectedIdx, setSelectedIdx] = useState<number>(initSelectedIdx);
  const [reserved, setReserved] = useState({
    idx: initSelectedIdx,
    key: initSelectedIdx === -1 ? null : optionList[initSelectedIdx].key,
  });
  const [selected, setSelected] = useState({
    idx: initSelectedIdx,
    key: initSelectedIdx === -1 ? null : optionList[initSelectedIdx].key,
  });
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
      // setSelectedIdx(idx);
      // setReserveIdx(idx);
      setSelected({
        idx,
        key: optionList[idx].key,
      });
      setReserved({
        idx,
        key: optionList[idx].key,
      });
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
      next = reserved.idx === -1 ? 0 : reserved.idx + 1;
      if (next >= len) next = 0;
      while (optionList[next].disabled) {
        endFlag++;
        next += 1;

        if (next >= len) next = 0;

        if (endFlag > len) return;
      }
      // setReserveIdx(next);
      setReserved({
        idx: next,
        key: optionList[next].key,
      });
      scrollTo(next);
      return;
    }

    if (key === 'ArrowUp') {
      let endFlag = 0;
      let next = reserved.idx - 1;
      if (next < 0) next = len - 1;

      while (optionList[next].disabled) {
        endFlag++;
        next -= 1;
        if (next < 0) next = len - 1;

        if (endFlag > len) return;
      }
      setReserved({
        idx: next,
        key: optionList[next].key,
      });
      scrollTo(next);
      return;
    }

    if (key === 'Enter') {
      setOpen(!open);
      // setSelectedIdx(reserve.idx);
      setSelected({
        idx: reserved.idx,
        key: reserved.key,
      });
      scrollTo(reserved.idx);
      return;
    }

    if (key === 'Escape') {
      setOpen(false);
      setReserved({
        idx: selected.idx,
        key: selected.key,
      });
      scrollTo(selected.idx);
    }
  };

  const onClickSelect = () => {
    setOpen(true);
  };

  const onClickAway = () => {
    // setReserveIdx(selectedIdx);
    setOpen(false);
    setReserved({
      idx: selected.idx,
      key: selected.key,
    });
    scrollTo(selected.idx);
  };

  useClickAway({ onClickAway, elementRefs: [selectRef, dropboxRef] });

  useEffect(() => {
    const initialize = () => {
      // setSelectedIdx(initSelectedIdx);
      // setReserveIdx(initSelectedIdx);
      setSelected({
        idx: initSelectedIdx,
        key: initSelectedIdx === -1 ? null : optionList[initSelectedIdx].key,
      });
      setReserved({
        idx: initSelectedIdx,
        key: initSelectedIdx === -1 ? null : optionList[initSelectedIdx].key,
      });
    };
    initialize();
  }, [initSelectedIdx, optionList]);

  return {
    open,
    selectedKey: selected.key,
    reservedKey: reserved.key,
    boxContent: optionList[selected.idx]?.content ?? '',
    optionList,
    onClickSelect,
    onClickOption,
    onKeyDown,
    selectRef,
    dropboxRef,
  };
}

export default useSelectController;
