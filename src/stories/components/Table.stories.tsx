import type { StoryFn, Meta } from '@storybook/react';

import Table, { type TableProps } from '@src/components/Table/Table';

const meta: Meta<typeof Table> = {
  title: 'UI/Components/Table',
  component: Table,
  parameters: {
    componentSubtitle: 'Table',
  },
  argTypes: {},
};

const Template = (args: TableProps) => {
  const { ...arg } = args;

  return (
    <Table {...arg}>
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
TableStory.args = {};

export default meta;
