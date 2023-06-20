import type { StoryFn, Meta } from '@storybook/react';

import Button, { ButtonProps } from '@src/components/atoms/Button/Button';

import downloadIcon from '@icons/download_icon.svg';

// import classNames from 'classnames/bind';
// import style from './Test.module.scss';
// const cx = classNames.bind(style);

const meta: Meta<typeof Button> = {
  title: 'UI/Atoms/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
    disabled: {
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
    loading: {
      options: [true, false],
      control: {
        type: 'radio',
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
  },
};

const Template = (args: ButtonProps) => {
  const { children, ...arg } = args;

  return <Button {...arg}>{children}</Button>;
};

export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

export const LeftIcon: StoryFn<ButtonProps> = Template.bind({});
LeftIcon.args = {
  children: 'LeftIcon',
  variant: 'primary',
  leftIcon: (
    <img
      src={downloadIcon}
      alt='downIcon'
      style={{
        padding: '0',
      }}
    />
  ),
};

export const RightIcon: StoryFn<ButtonProps> = Template.bind({});
RightIcon.args = {
  children: 'RightIcon',
  variant: 'primary',
  rightIcon: (
    <img
      src={downloadIcon}
      alt='downIcon'
      style={{
        padding: '0',
      }}
    />
  ),
};

export default meta;
