import React, { useState } from "react";
import {
  Divider,
  Pagination,
  Button,
  Card,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  PaginationVariant,
} from "@patternfly/react-core";
import { TopicsData } from "./TopicsData";
import {
  Table,
  TableVariant,
  TableHeader,
  TableBody,
  sortable,
} from "@patternfly/react-table";
import { SearchTopics } from "./SearchTopics";
export interface ITopic {
  name: String;
  replicas: number;
  partitions: number;
}
export interface ITopicProps {
  rows: ITopic[];
}

const TopicsList: React.FunctionComponent = ({}) => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [viewFilteredTable, setViewFilteredTable] = useState<boolean>(false);
  const [tableData, setTableData] = useState(TopicsData);

  const onSetPage = (_event:any, pageNumber:number) => {
    setPage(pageNumber);
  };

  const onPerPageSelect = (_event:any, perPage:number) => {
    setPerPage(perPage);
  };

  const tableColumns = [
    { title: "Name", transforms: [sortable] },
    { title: "Replicas", transforms: [sortable] },
    { title: "Partitions", transforms: [sortable] },
  ];

  const rowData = tableData.map((topic) => [
    topic.name,
    topic.replicas,
    topic.partitions,
  ]);

  const actions = [{ title: "Edit" }, { title: "Delete" }];
  return (
    <>
      <Card>
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>
              <SearchTopics
                viewFilteredTable={setViewFilteredTable}
                tableData={setTableData}
              />
            </ToolbarItem>
            <ToolbarItem>
              <Button className="topics-per-page">Create topic</Button>
            </ToolbarItem>
            <ToolbarItem variant="pagination">
              <Pagination
                itemCount={rowData.length}
                perPage={perPage}
                page={page}
                onSetPage={onSetPage}
                widgetId="pagination-options-menu-top"
                onPerPageSelect={onPerPageSelect}
              />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
        <Divider />
        <Table
          aria-label="Compact Table"
          variant={TableVariant.compact}
          cells={tableColumns}
          rows={rowData}
          actions={actions}I
        >
          <TableHeader />
          <TableBody />
        </Table>
     
      </Card>
      <Divider />
   
    </>
  );
};
export { TopicsList };
