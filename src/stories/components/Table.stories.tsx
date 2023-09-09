import type { StoryFn, Meta } from '@storybook/react';

import Table, { type TableProps } from '@src/components/Table/Table';
import { useRef, useState } from 'react';
import TableContainer from '@src/components/Table/TableContainer/TableContainer';

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

  const pageCnt = useRef(10);
  const [selected, setSelected] = useState(1);
  const [paginationCnt, setPaginationCnt] = useState(1);

  const onClickPagination = (move: 'left' | 'right') => {
    if (move === 'left' && paginationCnt - 1 > 0) {
      const pCnt = paginationCnt - 1;
      setSelected(pCnt * pageCnt.current);
      setPaginationCnt(pCnt);
    } else if (move === 'right') {
      const pCnt = paginationCnt + 1;
      setSelected(paginationCnt * pageCnt.current + 1);
      setPaginationCnt(pCnt);
    }
  };

  const onClickPageIndex = (idx: number) => {
    setSelected(idx);
  };

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
      <Table.Pagination
        pageCnt={pageCnt.current}
        selectedPage={selected}
        paginationCnt={paginationCnt}
        onClickPageIndex={onClickPageIndex}
        onClickPagination={onClickPagination}
      />
    </TableContainer>
  );
};

export const TableStory: StoryFn<TableProps> = Template.bind({});
TableStory.args = {};

export default meta;
