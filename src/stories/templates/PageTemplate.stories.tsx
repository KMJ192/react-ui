import { useState, useRef } from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import PageTemplate from '@src/components/templates/PageTemplate/PageTemplate';
import type { PageTemplateProps } from '@src/components/templates/PageTemplate/PageTemplate';

const meta: Meta<typeof PageTemplate> = {
  title: 'UI/Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    componentSubtitle: 'PageTemplate',
  },
  argTypes: {},
};

const Template = (args: PageTemplateProps) => {
  const initSelected = useRef({
    '1': false,
    '1-1': false,
    '1-1-1': false,
    '1-1-2': false,
    '1-1-3': false,
    '1-2': false,
    '1-3': false,
    '2': false,
    '2-1': false,
    '2-2': false,
    '2-3': false,
    '3': false,
    '3-1': false,
    '3-1-1': false,
    '3-1-2': false,
    '3-1-3': false,
    '3-2': false,
    '3-3': false,
  });

  const [show, setShow] = useState<{ [key: string]: boolean }>({
    '0': false,
    '1': false,
    '2': false,
    '3': false,
    '4': false,
  });
  const [selected, setSelected] = useState({
    ...initSelected.current,
  });

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;

    if (element.dataset.key) {
      setSelected({
        ...initSelected.current,
        [String(element.dataset.key)]: true,
      });
    }
  };

  const onShow = (key: string) => {
    setShow({
      ...show,
      [key]: !show[key],
    });
  };

  return (
    <PageTemplate {...args}>
      <PageTemplate.SideNav depthGap={16} onClick={onClick}>
        <PageTemplate.SideNav.Menu
          data-key='1'
          selected={selected['1']}
          onClick={() => {
            onShow('0');
          }}
        >
          menu1
        </PageTemplate.SideNav.Menu>
        <PageTemplate.SideNav.MenuGroup show={show['0']} depth={1}>
          <PageTemplate.SideNav.Menu
            selected={selected['1-1']}
            data-key='1-1'
            onClick={() => {
              onShow('1');
            }}
          >
            menu1-1
          </PageTemplate.SideNav.Menu>
          <PageTemplate.SideNav.MenuGroup show={show['1']} depth={2}>
            <PageTemplate.SideNav.Menu
              data-key='1-1-1'
              selected={selected['1-1-1']}
            >
              menu1-1-1
            </PageTemplate.SideNav.Menu>
            <PageTemplate.SideNav.Menu
              data-key='1-1-2'
              selected={selected['1-1-2']}
            >
              menu1-1-2
            </PageTemplate.SideNav.Menu>
            <PageTemplate.SideNav.Menu
              data-key='1-1-3'
              selected={selected['1-1-3']}
            >
              menu1-1-3
            </PageTemplate.SideNav.Menu>
          </PageTemplate.SideNav.MenuGroup>
          <PageTemplate.SideNav.Menu
            data-key='1-2'
            selected={selected['1-2']}
            disabled
          >
            menu1-2
          </PageTemplate.SideNav.Menu>
          <PageTemplate.SideNav.Menu data-key='1-3' selected={selected['1-3']}>
            menu1-3
          </PageTemplate.SideNav.Menu>
        </PageTemplate.SideNav.MenuGroup>
        <PageTemplate.SideNav.Menu
          data-key='2'
          selected={selected['2']}
          onClick={() => {
            onShow('2');
          }}
        >
          menu2
        </PageTemplate.SideNav.Menu>
        <PageTemplate.SideNav.MenuGroup show={show['2']} depth={1}>
          <PageTemplate.SideNav.Menu data-key='2-1' selected={selected['2-1']}>
            menu2-1
          </PageTemplate.SideNav.Menu>
          <PageTemplate.SideNav.Menu data-key='2-2' selected={selected['2-2']}>
            menu2-2
          </PageTemplate.SideNav.Menu>
          <PageTemplate.SideNav.Menu data-key='2-3' selected={selected['2-3']}>
            menu2-3
          </PageTemplate.SideNav.Menu>
        </PageTemplate.SideNav.MenuGroup>
        <PageTemplate.SideNav.Menu
          selected={selected['3']}
          data-key='3'
          onClick={() => {
            onShow('3');
          }}
        >
          menu3
        </PageTemplate.SideNav.Menu>
        <PageTemplate.SideNav.MenuGroup show={show['3']} depth={1}>
          <PageTemplate.SideNav.Menu
            data-key='3-1'
            selected={selected['3-1']}
            onClick={() => {
              onShow('4');
            }}
          >
            menu3-1
          </PageTemplate.SideNav.Menu>
          <PageTemplate.SideNav.MenuGroup show={show['4']} depth={2}>
            <PageTemplate.SideNav.Menu
              data-key='3-1-1'
              selected={selected['3-1-1']}
            >
              menu3-1-1
            </PageTemplate.SideNav.Menu>
            <PageTemplate.SideNav.Menu
              data-key='3-1-2'
              selected={selected['3-1-2']}
            >
              menu3-1-2
            </PageTemplate.SideNav.Menu>
            <PageTemplate.SideNav.Menu
              data-key='3-1-3'
              selected={selected['3-1-3']}
            >
              menu3-1-3
            </PageTemplate.SideNav.Menu>
          </PageTemplate.SideNav.MenuGroup>
          <PageTemplate.SideNav.Menu data-key='3-2' selected={selected['3-2']}>
            menu3-2
          </PageTemplate.SideNav.Menu>
          <PageTemplate.SideNav.Menu data-key='3-3' selected={selected['3-3']}>
            menu3-3
          </PageTemplate.SideNav.Menu>
        </PageTemplate.SideNav.MenuGroup>
      </PageTemplate.SideNav>
      <PageTemplate.Header>
        <PageTemplate.Header.Left>Left</PageTemplate.Header.Left>
        <PageTemplate.Header.Mid>Mid</PageTemplate.Header.Mid>
        <PageTemplate.Header.Right>Right</PageTemplate.Header.Right>
      </PageTemplate.Header>
      <PageTemplate.Page>{args.children}</PageTemplate.Page>
      <PageTemplate.Footer>
        <PageTemplate.Footer.Left>Left</PageTemplate.Footer.Left>
        <PageTemplate.Footer.Mid>Mid</PageTemplate.Footer.Mid>
        <PageTemplate.Footer.Right>Right</PageTemplate.Footer.Right>
      </PageTemplate.Footer>
    </PageTemplate>
  );
};

export const PrimaryPageTemplate: StoryFn<PageTemplateProps> = Template.bind(
  {},
);
PrimaryPageTemplate.args = {
  children: 'Page',
};

export default meta;
