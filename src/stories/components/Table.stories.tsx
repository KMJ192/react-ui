import type { StoryFn, Meta } from '@storybook/react';

import Table, { type TableProps } from '@src/components/Table/Table';
import { useState } from 'react';

const meta: Meta<typeof Table> = {
  title: 'UI/Components/Table',
  component: Table,
  parameters: {
    componentSubtitle: 'Table',
  },
  argTypes: {
    isPagination: {
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args: TableProps) => {
  const { ...arg } = args;

  const [selected, setSelected] = useState(1);

  const onClickPagination = (move: 'left' | 'right') => {
    console.log(move);
  };

  const onClickPageIndex = (idx: number) => {
    setSelected(idx);
  };

  return (
    <Table
      {...arg}
      selectedPage={selected}
      onClickPageIndex={onClickPageIndex}
      onClickPagination={onClickPagination}
    >
      <Table.Caption>caption</Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>head1</Table.Th>
          <Table.Th>head2</Table.Th>
          <Table.Th>head3</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>data1</Table.Td>
          <Table.Td>data2</Table.Td>
          <Table.Td>data3</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>data1</Table.Td>
          <Table.Td>data2</Table.Td>
          <Table.Td>data3</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>data1</Table.Td>
          <Table.Td>data2</Table.Td>
          <Table.Td>data3</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>data1</Table.Td>
          <Table.Td>data2</Table.Td>
          <Table.Td>data3</Table.Td>
        </Table.Tr>
      </Table.Tbody>
      <Table.Tfoot>
        <Table.Tr>
          <Table.Th>foot1</Table.Th>
          <Table.Th>foot2</Table.Th>
          <Table.Th>foot3</Table.Th>
        </Table.Tr>
      </Table.Tfoot>
    </Table>
  );
};

export const TableStory: StoryFn<TableProps> = Template.bind({});
TableStory.args = {
  isPagination: true,
  pageCnt: 10,
  paginationCnt: 1,
};

export default meta;
