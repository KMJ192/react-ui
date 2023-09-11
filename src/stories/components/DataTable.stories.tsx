import type { StoryFn, Meta } from '@storybook/react';

import {
  DataTable,
  DataTableContainer,
  useDataTablePagination,
  type DataTableProps,
} from '@src/components/DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'UI/Components/DataTable',
  component: DataTable,
  parameters: {
    componentSubtitle: 'DataTable',
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

const Template = (args: DataTableProps) => {
  const { ...arg } = args;

  const paging = useDataTablePagination({
    lastPage: 41,
  });

  return (
    <DataTableContainer>
      <DataTable {...arg}>
        <DataTable.Caption>caption</DataTable.Caption>
        <DataTable.Thead>
          <DataTable.Tr>
            <DataTable.Th>head1</DataTable.Th>
            <DataTable.Th>head2</DataTable.Th>
            <DataTable.Th>head3</DataTable.Th>
          </DataTable.Tr>
        </DataTable.Thead>
        <DataTable.Tbody>
          <DataTable.Tr>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
          <DataTable.Tr>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
          <DataTable.Tr>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
          <DataTable.Tr>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
        </DataTable.Tbody>
        <DataTable.Tfoot>
          <DataTable.Tr>
            <DataTable.Th>foot1</DataTable.Th>
            <DataTable.Th>foot2</DataTable.Th>
            <DataTable.Th>foot3</DataTable.Th>
          </DataTable.Tr>
        </DataTable.Tfoot>
      </DataTable>
      <DataTable.DataTablePagination {...paging} />
    </DataTableContainer>
  );
};

export const DataTableStory: StoryFn<DataTableProps> = Template.bind({});
DataTableStory.args = {};

export default meta;
