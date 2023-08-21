import type { StoryFn, Meta } from '@storybook/react';
import { useRef } from 'react';

import PageTemplate, {
  type PageTemplateProps,
} from '@src/components/templates/PageTemplate/PageTemplate';
import { SideNavItem } from '@src/components/molecules/SideNav';

const meta: Meta<typeof PageTemplate> = {
  title: 'UI/Template/PageTemplate',
  component: PageTemplate,
  parameters: {
    componentSubtitle: 'PageTemplate',
  },
  argTypes: {},
};

const Template = (args: PageTemplateProps) => {
  const { children, ...arg } = args;

  const navItem = useRef<Array<SideNavItem>>([
    {
      key: 'nav1',
      contents: 'Nav1',
      children: [
        {
          key: 'nav1-1',
          contents: 'Nav1-1',
          children: [
            {
              key: 'nav1-1-1',
              contents: 'Nav1-1-1',
            },
            {
              key: 'nav1-1-2',
              contents: 'Nav1-1-2',
            },
          ],
        },
        {
          key: 'nav1-2',
          contents: 'Nav1-2',
        },
        {
          key: 'nav1-3',
          contents: 'Nav1-3',
        },
      ],
    },
    {
      key: 'nav2',
      contents: 'Nav2',
      children: [
        {
          key: 'nav2-1',
          contents: 'Nav2-1',
        },
        {
          key: 'nav2-2',
          contents: 'Nav2-2',
        },
      ],
    },
    {
      key: 'nav3',
      contents: 'Nav3',
      children: [
        {
          key: 'nav3-1',
          contents: 'Nav3-1',
        },
        {
          key: 'nav3-2',
          contents: 'Nav3-2',
        },
        {
          key: 'nav3-3',
          contents: 'Nav3-3',
        },
      ],
    },
  ]);

  const onClickItem = (key: string | number) => {
    console.log(key);
  };

  return (
    <PageTemplate {...arg} menu={navItem.current} onClickItem={onClickItem}>
      {children}
    </PageTemplate>
  );
};

export const TestStory: StoryFn<PageTemplateProps> = Template.bind({});
TestStory.args = {
  children: 'Test',
};

export default meta;
