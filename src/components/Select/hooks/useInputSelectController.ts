import React, { useEffect, useRef, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { useTrie, useClickAway } from '@upcast/react-modules';

import type { InputSelectOption } from '../types';

type Params = {
  initSelectedIdx?: number;
  caseSensitive?: boolean;
  readonly optionList?: Array<InputSelectOption>;
};

const makePrimitive = (optionList: Array<InputSelectOption>) => {
  return optionList.map(({ key, content, disabled }, index) => ({
    key,
    content,
    disabled,
    index,
  }));
};

const KEY_EVENT = {
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ENTER: 'Enter',
  ESCAPE: 'Escape',
};

function useInputSelectController({
  initSelectedIdx = -1,
  optionList = [],
  caseSensitive = false,
}: Params) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropboxRef = useRef<HTMLUListElement>(null);
  const compositionRef = useRef(false);
  const primitive = useRef<Array<InputSelectOption>>(makePrimitive(optionList));

  const [open, setOpen] = useState<boolean>(false);
  const [reserved, setReserved] = useState({
    idx: initSelectedIdx,
    key: initSelectedIdx === -1 ? null : primitive.current[initSelectedIdx].key,
  });
  const [selected, setSelected] = useState({
    idx: initSelectedIdx,
    key: initSelectedIdx === -1 ? null : primitive.current[initSelectedIdx].key,
  });
  const [viewOptionList, setViewOptionList] = useState<
    Array<InputSelectOption>
  >(cloneDeep(primitive.current));

  const { trie, rebuild: rebuildTrie } = useTrie<{
    disabled?: boolean;
  }>({
    dictionary: primitive.current,
    caseSensitive,
  });

  const scrollTo = (idx: number) => {
    if (idx < 0) return;
    if (!dropboxRef.current) return;
    const dropbox = dropboxRef.current;
    if (!dropbox.childNodes[idx]) return;
    const { height } = (
      dropbox.childNodes[idx] as HTMLElement
    ).getBoundingClientRect();
    dropbox.scrollTo({
      top: height * idx,
      behavior: 'smooth',
    });
  };

  const event = (e: {
    type: 'enter' | 'esc' | 'mouse-click' | 'click-away' | 'init' | 'change';
    option?: any;
  }) => {
    if (!inputRef.current) return;
    const selectEle = inputRef.current;
    const { type, option } = e;
    // 1. 선택 이벤트 - Enter
    if (type === 'enter') {
      const { idx: reservedIdx } = reserved;
      const {
        index: realIndex,
        content,
        key: realKey,
      } = viewOptionList[reservedIdx];
      if (open) selectEle.blur();

      setOpen(!open);
      setViewOptionList(cloneDeep(primitive.current));
      setReserved({
        idx: realIndex,
        key: realKey,
      });
      setSelected({
        idx: realIndex,
        key: realKey,
      });
      selectEle.value = content;
      return;
    }

    // 2. 선택 이벤트 - 마우스 클릭
    if (type === 'mouse-click') {
      const { idx } = option;
      if (!viewOptionList[idx].disabled) {
        const { index: realIndex, content, key: realKey } = viewOptionList[idx];
        setOpen(false);
        setViewOptionList(cloneDeep(primitive.current));
        setReserved({
          idx: realIndex,
          key: realKey,
        });
        setSelected({
          idx: realIndex,
          key: realKey,
        });
        selectEle.value = content;
      }
      return;
    }

    // 3. 취소 이벤트 - Escape
    if (type === 'esc') {
      setOpen(false);
      selectEle.blur();
      if (selected.idx === -1) {
        selectEle.value = '';
      } else {
        const {
          index: realIndex,
          key: realKey,
          content,
        } = optionList[selected.idx];
        setViewOptionList(cloneDeep(primitive.current));
        setReserved({
          idx: realIndex,
          key: realKey,
        });
        setSelected({
          idx: realIndex,
          key: realKey,
        });
        selectEle.value = content;
      }
      return;
    }

    // 4. 취소 이벤트 - Click Away
    if (type === 'click-away') {
      const { idx: selectedIdx } = selected;
      if (viewOptionList.length <= selectedIdx || !open || selectedIdx === -1) {
        return;
      }
      const { index: realIndex, key: realKey } = viewOptionList[selectedIdx];
      const { content } = primitive.current[realIndex];
      setOpen(false);
      setReserved({
        idx: realIndex,
        key: realKey,
      });
      setViewOptionList(cloneDeep(primitive.current));
      selectEle.value = content;
      return;
    }

    // 5. 초기화 이벤트
    if (type === 'init') {
      const { optionList: initList, initSelectedIdx: initIdx } = option;
      primitive.current = makePrimitive(initList);
      setViewOptionList(cloneDeep(primitive.current));
      setReserved({
        idx: initIdx,
        key: initIdx === -1 ? null : primitive.current[initIdx].key,
      });
      setSelected({
        idx: initIdx,
        key: initIdx === -1 ? null : primitive.current[initIdx].key,
      });
      rebuildTrie({ dictionary: primitive.current });
      return;
    }

    // 6. input change 이벤트
    if (type === 'change') {
      const { value } = option;
      selectEle.value = value;
      const filtered = trie.containList(value);
      setOpen(true);
      setReserved({
        idx: -1,
        key: null,
      });
      if (value === '') {
        setViewOptionList(cloneDeep(primitive.current));
        scrollTo(0);
      } else {
        setViewOptionList(filtered);
        if (filtered.length > 0) {
          scrollTo(0);
        }
      }
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const { value } = e.target;
    event({
      type: 'change',
      option: {
        value,
      },
    });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (!dropboxRef.current) return;
    const { key } = e;
    if (
      key !== KEY_EVENT.ARROW_DOWN &&
      key !== KEY_EVENT.ARROW_UP &&
      key !== KEY_EVENT.ENTER &&
      key !== KEY_EVENT.ESCAPE
    ) {
      return;
    }

    const len = viewOptionList.length;

    if (key === KEY_EVENT.ARROW_DOWN || key === KEY_EVENT.ARROW_UP) {
      if (!open) {
        setOpen(true);
        return;
      }
      e.preventDefault();
      if (len === 0) return;

      if (compositionRef.current) {
        compositionRef.current = false;
        return;
      }
    }

    if (key === KEY_EVENT.ARROW_DOWN) {
      let endFlag = 0;
      let next = 0;
      next = reserved.idx === -1 ? 0 : reserved.idx + 1;
      if (next >= len) next = 0;

      while (viewOptionList[next].disabled) {
        endFlag++;
        next += 1;
        if (next >= len) next = 0;

        if (endFlag > len) return;
      }
      setReserved({
        idx: next,
        key: viewOptionList[next].key,
      });
      return;
    }

    if (key === KEY_EVENT.ARROW_UP) {
      let endFlag = 0;
      let next = reserved.idx - 1;
      if (next < 0) next = len - 1;

      while (viewOptionList[next].disabled) {
        endFlag++;
        next -= 1;
        if (next < 0) next = len - 1;

        if (endFlag > len) return;
      }
      setReserved({
        idx: next,
        key: viewOptionList[next].key,
      });
      return;
    }

    if (key === KEY_EVENT.ENTER && reserved.idx !== -1) {
      event({
        type: 'enter',
      });
      return;
    }

    if (key === KEY_EVENT.ESCAPE) {
      event({
        type: 'esc',
      });
    }
  };

  const onClickOption = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    event({
      type: 'mouse-click',
      option: {
        idx,
      },
    });
  };

  const onClickSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(true);
  };

  const onClickAway = () => {
    event({
      type: 'click-away',
    });
  };

  useClickAway({
    onClickAway,
    elementRefs: [inputRef, dropboxRef],
  });

  useEffect(() => {
    event({
      type: 'init',
      option: {
        optionList,
        initSelectedIdx,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initSelectedIdx, optionList]);

  useEffect(() => {
    scrollTo(reserved.idx);
  }, [reserved.idx]);

  useEffect(() => {
    if (!inputRef.current) return () => {};

    const selectEle = inputRef.current;
    const onCompositionStart = () => {
      compositionRef.current = true;
    };
    const onCompositionEnd = () => {
      compositionRef.current = false;
    };

    selectEle.addEventListener('compositionstart', onCompositionStart);
    selectEle.addEventListener('compositionend', onCompositionEnd);

    return () => {
      selectEle.removeEventListener('compositionstart', onCompositionStart);
      selectEle.removeEventListener('compositionend', onCompositionEnd);
    };
  }, []);

  return {
    open,
    selectedKey: selected.key,
    reservedKey: reserved.key,
    onClickSelect,
    onClickOption,
    onKeyDown,
    onChange,
    optionList: viewOptionList,
    isOption: viewOptionList.length > 0,
    inputRef,
    dropboxRef,
  };
}

export default useInputSelectController;
