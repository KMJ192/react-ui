import type { StoryFn, Meta } from '@storybook/react';

import Button, { type ButtonProps } from '@src/components/Button/Button';
// import { Button, type ButtonProps } from '@cdkit/react-ui';

import downloadIcon from '@icons/download_icon.svg';

const meta: Meta<typeof Button> = {
  title: 'UI/Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button',
  },
  argTypes: {
    variant: {
      options: ['primary', 'outlined', 'clear'],
      control: {
        type: 'select',
      },
    },
    shape: {
      options: ['rect', 'circle', 'square'],
      control: {
        type: 'select',
      },
    },
    leftIcon: {
      control: {
        disable: true,
      },
    },
    rightIcon: {
      control: {
        disable: true,
      },
    },
    display: {
      options: ['flex', 'grid'],
      control: {
        type: 'radio',
      },
    },
    flexDirection: {
      options: ['column', 'row', 'column-reverse', 'row-reverse'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args: any) => {
  const { children, leftIcon, rightIcon, loading, ...arg } = args;

  return (
    <Button {...arg}>
      {loading && <Button.LoadingSpinner />}
      {leftIcon}
      {children}
      {rightIcon}
    </Button>
  );
};

export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
  shape: 'rect',
  disabled: false,
  centerVertical: true,
  centerHorizontal: true,
  clickAnimation: true,
};

export const Loading: StoryFn = Template.bind({});
Loading.args = {
  children: 'Loading',
  variant: 'primary',
  shape: 'rect',
  disabled: true,
  centerVertical: true,
  centerHorizontal: true,
  clickAnimation: true,
  loading: true,
};

export const LeftIcon: StoryFn<ButtonProps & { leftIcon: any }> = Template.bind(
  {},
);
LeftIcon.args = {
  children: 'LeftIcon',
  variant: 'primary',
  shape: 'rect',
  disabled: false,
  leftIcon: (
    <img
      src={downloadIcon}
      alt='downIcon'
      style={{
        padding: '0',
        width: '1.5rem',
      }}
    />
  ),
  centerVertical: true,
  centerHorizontal: true,
  clickAnimation: true,
};

export const RightIcon: StoryFn<ButtonProps & { rightIcon: any }> =
  Template.bind({});
RightIcon.args = {
  children: 'RightIcon',
  variant: 'primary',
  shape: 'rect',
  disabled: false,
  rightIcon: (
    <img
      src={downloadIcon}
      alt='downIcon'
      style={{
        padding: '0',
        width: '1.5rem',
      }}
    />
  ),
  centerVertical: true,
  centerHorizontal: true,
  clickAnimation: true,
};

export default meta;
