import type { StoryFn, Meta } from '@storybook/react';

import {
  Table,
  TableContainer,
  useTablePage,
  type TableProps,
} from '@src/components/Table';

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

  const paging = useTablePage({
    lastPage: 41,
  });

  return (
    <TableContainer>
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
      <Table.Pagination {...paging} />
    </TableContainer>
  );
};

export const TableStory: StoryFn<TableProps> = Template.bind({});
TableStory.args = {};

export default meta;
