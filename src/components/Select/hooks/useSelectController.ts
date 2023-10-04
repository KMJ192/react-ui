import { useEffect, useRef, useState } from 'react';
import { useClickAway } from '@upcast/react-modules';

import type { SelectOption } from '../types';

type Params = {
  initSelectedIdx?: number;
  readonly optionList?: ReadonlyArray<SelectOption>;
};

function useSelectController({
  initSelectedIdx = -1,
  optionList = [],
}: Params) {
  const [open, setOpen] = useState<boolean>(false);
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

  const onClickOption = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    if (!optionList[idx].disabled) {
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
    isOption: optionList.length > 0,
    onClickSelect,
    onClickOption,
    onKeyDown,
    selectRef,
    dropboxRef,
  };
}

export default useSelectController;
