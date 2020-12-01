import React, { useState } from 'react';
import { Button, ButtonVariant, InputGroup, TextInput } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import { TopicsData } from './TopicsData';

export interface ISearchTopics {
  viewFilteredTable: (value: boolean) => void;
  tableData: (value: any) => any;
}
const SearchTopics: React.FunctionComponent<ISearchTopics> = ({ viewFilteredTable, tableData }) => {
  const [search, setSearch] = useState('');
  const onChangeInput = (value: string, evt: any) => {
    setSearch(value);
  };
  const filter = () => {
    viewFilteredTable(true);
    tableData(TopicsData.filter((row) => row.name.toLowerCase().indexOf(search.toLowerCase()) > -1));
  };
  return (
    <InputGroup>
      <TextInput
        name="searchName"
        id="searchTopicsInput"
        type="search"
        aria-label="search input "
        placeholder="Search"
        value={search}
        onChange={onChangeInput}
      />
      <Button variant={ButtonVariant.control} aria-label="search button for search input" onClick={filter}>
        <SearchIcon />
      </Button>
    </InputGroup>
  );
};
export { SearchTopics };
