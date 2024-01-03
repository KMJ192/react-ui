import type { StoryFn, Meta } from '@storybook/react';

import Select from '@src/components/Select/Select';
// import useSelectController from '@src/components/Select/hooks/useSelectController';
// import useInputSelectController from '@src/components/Select/hooks/useInputSelectController';
// import {
//   Select,
//   useSelectController,
//   useInputSelectController,
// } from '@cdkit/react-ui';

const meta: Meta<typeof Select> = {
  title: 'UI/Components/Select',
  component: Select,
  parameters: {
    componentSubtitle: 'Select',
  },
  argTypes: {},
};

const PrimaryType = (args: any) => {
  return (
    <Select {...args}>
      <Select.Field>Option1</Select.Field>
      <Select.Options>
        <Select.Option selected>Option1</Select.Option>
        <Select.Option>Option2</Select.Option>
        <Select.Option disabled>Option3</Select.Option>
        <Select.Option>Option4</Select.Option>
        <Select.Option>Option5</Select.Option>
      </Select.Options>
    </Select>
  );
};

export const PrimarySelect: StoryFn = PrimaryType.bind({});
PrimarySelect.args = {
  open: false,
  disabled: false,
  error: false,
  placeholder: 'placeholder',
  direction: 'down',
};

const InputType = (args: any) => {
  return (
    <Select {...args}>
      <Select.InputField />
      <Select.Options>
        <Select.Option selected>Option1</Select.Option>
        <Select.Option>Option2</Select.Option>
        <Select.Option disabled>Option3</Select.Option>
        <Select.Option>Option4</Select.Option>
        <Select.Option>Option5</Select.Option>
      </Select.Options>
    </Select>
  );
};

export const InputSelect: StoryFn = InputType.bind({});
InputSelect.args = {
  open: false,
  disabled: false,
  error: false,
  placeholder: 'placeholder',
  direction: 'down',
};

// const PrimaryTemplate = (args: any) => {
//   const {
//     initSelectedIdx,
//     placeholder,
//     optionList: list,
//     error,
//     disabled,
//   } = args;

//   const {
//     open,
//     selectBoxRef,
//     dropboxRef,
//     selectedKey,
//     reservedKey,
//     boxContent,
//     onClickSelect,
//     onClickOption,
//     onKeyDown,
//     optionList,
//     isOption,
//   } = useSelectController({
//     initSelectedIdx,
//     optionList: list,
//   });

//   return (
//     <>
//       <div
//         style={{
//           height: '500px',
//         }}
//       ></div>
//       <Select
//         open={open}
//         error={error}
//         disabled={disabled}
//         isOption={isOption}
//         onClick={onClickSelect}
//         onKeyDown={onKeyDown}
//         style={
//           {
//             // marginTop: '1000px',
//             // marginBottom: '100px',
//           }
//         }
//       >
//         <Select.Field ref={selectBoxRef}>{boxContent}</Select.Field>
//         <Select.Dropbox
//           ref={dropboxRef}
//           direction='up'
//           style={{
//             maxHeight: '300px',
//           }}
//         >
//           {optionList.map(({ key, content, disabled }, idx) => {
//             const selected = key === selectedKey;
//             const reserved = key === reservedKey;
//             return (
//               <Select.Option
//                 key={key}
//                 disabled={disabled}
//                 selected={selected}
//                 reserved={reserved}
//                 onClick={(e: React.MouseEvent) => {
//                   onClickOption(e, idx);
//                 }}
//               >
//                 {content}
//               </Select.Option>
//             );
//           })}
//         </Select.Dropbox>
//       </Select>
//     </>
//   );
// };

// export const PrimarySelectTemplate: StoryFn = PrimaryTemplate.bind({});
// PrimarySelectTemplate.args = {
//   disabled: false,
//   error: false,
//   initSelectedIdx: -1,
//   placeholder: 'placeholder',
//   optionList: Array.from({ length: 50 }, (_, idx: number) => ({
//     key: idx,
//     content: `Option${idx + 1}`,
//   })),
// };

// const InputTemplate = (args: any) => {
//   const {
//     initSelectedIdx,
//     placeholder,
//     optionList: list,
//     error,
//     disabled,
//     caseSensitive,
//   } = args;

//   const {
//     open,
//     reservedKey,
//     selectedKey,
//     onClickOption,
//     onClickSelect,
//     onKeyDown,
//     onChange,
//     optionList,
//     isOption,
//     inputBoxRef,
//     dropboxRef,
//   } = useInputSelectController({
//     initSelectedIdx,
//     optionList: list,
//     caseSensitive,
//   });

//   return (
//     <Select
//       open={open}
//       error={error}
//       disabled={disabled}
//       isOption={isOption}
//       onClick={onClickSelect}
//       onKeyDown={onKeyDown}
//     >
//       <Select.InputField
//         ref={inputBoxRef}
//         placeholder={placeholder}
//         onChange={onChange}
//       />
//       <Select.Dropbox
//         ref={dropboxRef}
//         direction='down'
//         style={{
//           maxHeight: '240px',
//         }}
//       >
//         {optionList.map(({ key, content, disabled }, idx) => {
//           const selected = key === selectedKey;
//           const reserved = key === reservedKey;
//           return (
//             <Select.Option
//               key={key}
//               disabled={disabled}
//               selected={selected}
//               reserved={reserved}
//               onClick={(e: React.MouseEvent) => {
//                 onClickOption(e, idx);
//               }}
//             >
//               {content}
//             </Select.Option>
//           );
//         })}
//       </Select.Dropbox>
//     </Select>
//   );
// };

// export const InputSelectTemplate: StoryFn = InputTemplate.bind({});
// InputSelectTemplate.args = {
//   disabled: false,
//   error: false,
//   initSelectedIdx: -1,
//   placeholder: 'placeholder',
//   caseSensitive: false,
//   optionList: [
//     ...[
//       {
//         key: 0,
//         content: '안녕',
//         index: 0,
//       },
//       {
//         key: 1,
//         content: '안녕하세요.',
//         index: 1,
//       },
//       {
//         key: 2,
//         content: '안',
//         index: 2,
//       },
//       {
//         key: 3,
//         content: '않돼',
//         index: 3,
//       },
//       {
//         key: 4,
//         content: '않된다.',
//         index: 4,
//       },
//       {
//         key: 5,
//         content: '안자',
//         index: 5,
//       },
//       {
//         key: 6,
//         content: '앉다',
//         index: 6,
//       },
//       {
//         key: 7,
//         content: '앉어',
//         index: 7,
//       },
//       {
//         key: 8,
//         content: '한글',
//         index: 8,
//       },
//       {
//         key: 9,
//         content: '한지',
//         index: 9,
//       },
//       {
//         key: 10,
//         content: '핝다',
//         index: 10,
//       },
//     ],
//     ...Array.from({ length: 50 }, (_, idx: number) => ({
//       key: idx + 11,
//       content: `Option${idx + 1}`,
//       index: idx + 11,
//     })),
//   ],
// };

export default meta;
