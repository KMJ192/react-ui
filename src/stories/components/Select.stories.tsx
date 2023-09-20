import type { StoryFn, Meta } from '@storybook/react';

import Select from '@src/components/Select/Select';

const meta: Meta<typeof Select> = {
  title: 'UI/Components/Select',
  component: Select,
  parameters: {
    componentSubtitle: 'Select',
  },
  argTypes: {},
};

const PrimaryTemplate = (args: any) => {
  const { selectedIdx, disabledIdx, placeholder, ...arg } = args;
  return (
    <Select {...arg}>
      <Select.Box placeholder={placeholder}></Select.Box>
      <Select.Dropbox>
        {Array.from({ length: 5 }, () => 0).map((_, idx) => {
          const selected = selectedIdx === idx;
          const disabled = disabledIdx === idx;
          return (
            <Select.Option selected={selected} disabled={disabled} key={idx}>
              Option{idx}
            </Select.Option>
          );
        })}
      </Select.Dropbox>
    </Select>
  );
};

export const PrimarySelect: StoryFn = PrimaryTemplate.bind({});
PrimarySelect.args = {
  disabled: false,
  error: false,
  open: false,
  selectedIdx: -1,
  disabledIdx: -1,
  placeholder: 'placeholder',
};

const InputTemplate = (args: any) => {
  const { selectedIdx, disabledIdx, placeholder, ...arg } = args;
  return (
    <Select {...arg}>
      <Select.InputBox placeholder={placeholder} />
      <Select.Dropbox>
        {Array.from({ length: 5 }, () => 0).map((_, idx) => {
          const selected = selectedIdx === idx;
          const disabled = disabledIdx === idx;
          return (
            <Select.Option selected={selected} disabled={disabled} key={idx}>
              Option{idx}
            </Select.Option>
          );
        })}
      </Select.Dropbox>
    </Select>
  );
};

export const InputSelect: StoryFn = InputTemplate.bind({});
InputSelect.args = {
  disabled: false,
  error: false,
  open: false,
  selectedIdx: -1,
  disabledIdx: -1,
  placeholder: 'placeholder',
};

export default meta;
