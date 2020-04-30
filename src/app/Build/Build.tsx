import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
} from '@patternfly/react-table';

import { SearchIcon } from '@patternfly/react-icons'

import { DataToolbar, DataToolbarItem, DataToolbarContent } from '@patternfly/react-core/dist/esm/experimental';

import {
  Card, CardHeader, CardBody, CardFooter,
  PageSection, Dropdown, DropdownItem,
  DropdownPosition, DropdownToggle, DropdownToggleCheckbox,
  Pagination, Title, Toolbar, ToolbarGroup, ToolbarItem,
  Grid, GridItem, Checkbox, Flex, FlexItem, FileUpload,
  FlexModifiers, StackItem, Stack, Button, ButtonVariant,
  InputGroup, TextInput, Tab, KebabToggle, DropdownSeparator,
  Form, FormGroup, ActionGroup, LoginForm, Radio
} from '@patternfly/react-core';

import { ThIcon, CaretDownIcon } from '@patternfly/react-icons';

import FileUploadIcon from '@patternfly/react-icons/dist/js/icons/file-upload-icon';

class PackageInstaller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
      perPage: 20,
      page: 1,
      error: null,
      loading: true,
      selectedItems: [],
      numSelected: 0,
      isDropDownOpen: false,
      isKebabOpen: false,
      searchValue: ''
    };

    this.onSelect = (event, isSelected, rowId) => {
      const { selectedItems } = this.state;
      const rows = [...this.state.res];
      const id = rows[rowId].id;
      rows[rowId].selected = isSelected;
      this.setState((prevState, props) => {
        return {
          res: rows,
          selectedItems: isSelected
            ? [...prevState.selectedItems, id]
            : prevState.selectedItems.filter(itemId => itemId !== id)
        };
      });
    };

    this.updateSelected = () => {
      const { res, selectedItems } = this.state;
      let rows = res.map(post => {
        post.selected = selectedItems.includes(post.id);
        return post;
      });

      this.setState({
        res: rows
      });
    };

    this.handleSelectClick = newState => {
      if (newState === 'none') {
        this.setState(
          {
            selectedItems: []
          },
          this.updateSelected
        );
      } else if (newState === 'page') {
        let newRows = [];
        let rows = this.state.res.map(post => {
          const isSelected = post.selected;
          newRows = isSelected ? [...newRows] : [...newRows, post.id];
          post.selected = true;
          return post;
        });

        this.setState((prevState, props) => {
          return {
            selectedItems: prevState.selectedItems.concat(newRows)
          };
        }, this.updateSelected);
      } else {
        let newRows = [];
        for (var i = 1; i <= 100; i++) newRows = [...newRows, i];

        this.setState(
          {
            selectedItems: newRows
          },
          this.updateSelected
        );
      }
    };

    this.onDropDownToggle = isOpen => {
      this.setState({
        isDropDownOpen: isOpen
      });
    };

    this.onDropDownSelect = event => {
      this.setState((prevState, props) => {
        return { isDropDownOpen: !prevState.isDropDownOpen };
      });
    };
  }

  fetch(page, perPage) {
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`)
      .then(resp => resp.json())
      .then(resp => this.setState({ res: resp, perPage, page, loading: false }))
      .then(() => this.updateSelected())
      .catch(err => this.setState({ error: err, loading: false }));
  }

  componentDidMount() {
    this.fetch(this.state.page, this.state.perPage);
  }

  renderPagination() {
    const { page, perPage } = this.state;
    return (
      <Pagination
        itemCount={100}
        page={page}
        perPage={perPage}
        onSetPage={(_evt, value) => {
          this.fetch(value, perPage);
        }}
        onPerPageSelect={(_evt, value) => {
          this.fetch(1, value);
        }}
        variant="top"
      />
    );
  }

  renderToolbar() {
    return (
      <Toolbar className="pf-r-toolbar pf-u-justify-content-space-between pf-u-mx-xl pf-u-my-md">
        {this.renderPagination()}
      </Toolbar>
    );
  }

co

  render() {
    const { loading, res } = this.state;
    const rows = res.map(post => ({
      cells: [post.title, post.id + '.0.' + post.userId ,post.body],
      selected: post.selected
    }));

    return (
      <React.Fragment>
        <Flex className="example-border" breakpointMods={[{ modifier: FlexModifiers["justify-content-space-between"] }]}>
          <FlexItem>{this.renderToolbar()}</FlexItem>
          <FlexItem><DataToolbarItems></DataToolbarItems></FlexItem>
        </Flex>

        {!loading && (
          <Table
            aria-label="Bulk Select Table Demo"
            cells={['Name', 'Version', 'Description']}
            rows={rows}
            onSelect={this.onSelect}
            canSelectAll={false}
          >
            <TableHeader />
            <TableBody />
          </Table>
        )}
        {this.renderPagination()}
      </React.Fragment>
    );
  }
}

class CustomPreviewFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null, filename: '' };
    this.handleFileChange = (value, filename, event) => this.setState({ value, filename });
  }

  render() {
    const { value, filename, isLoading } = this.state;
    return (
      <FileUpload
        id="customized-preview-file"
        value={value}
        filename={filename}
        onChange={this.handleFileChange}
        hideDefaultPreview
      >
        {value && (
          <div className="pf-u-m-md">
            <FileUploadIcon size="lg" /> {value.name}, {value.size} bytes
          </div>
        )}
      </FileUpload>
    );
  }
}

class SimpleDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
      this.onFocus();
    };
    this.onFocus = () => {
      const element = document.getElementById('toggle-id');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Available</DropdownItem>,
      <DropdownItem key="link">Installed</DropdownItem>,
      <DropdownItem key="link">Updates Needed</DropdownItem>,
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle id="toggle-id" onToggle={this.onToggle} iconComponent={CaretDownIcon}>
            Available
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}

class DataToolbarItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = <React.Fragment>
      <DataToolbarItem>
        <Flex>
          <FlexItem>
            <InputGroup>
              <TextInput name="textInput1" id="textInput1" type="search" aria-label="search input example" />
              <Button variant={ButtonVariant.control} aria-label="search button for search input">
                <SearchIcon />
              </Button>
            </InputGroup>
          </FlexItem>
          <FlexItem>
            <SimpleDropdown></SimpleDropdown>
          </FlexItem>
        </Flex>
      </DataToolbarItem>
    </React.Fragment>;

    return <DataToolbar id="data-toolbar"><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>;
  }
}

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
    };
    this.handleTextInputChange1 = value1 => {
      this.setState({ value1 });
    };
    this.handleTextInputChange2 = value2 => {
      this.setState({ value2 });
    };
    this.handleTextInputChange3 = value3 => {
      this.setState({ value3 });
    };
    this.handleTextInputChange4 = value4 => {
      this.setState({ value4 });
    };
    this.handleTextInputChange5 = value5 => {
      this.setState({ value5 });
    };
  }

  render() {
    const { value1, value2, value3, value4, value5 } = this.state;

    return (
      <Form>
        <FormGroup
          label="Docker ID"
          isRequired
          fieldId="simple-id-name"
          helperText="Please provide Docker username"
        >
          <TextInput
            isRequired
            type="text"
            id="simple-id-name"
            name="simple-id-name"
            aria-describedby="simple-id-name-helper"
            value={value1}
            onChange={this.handleTextInputChange1}
          />
        </FormGroup>

        <FormGroup
          label="Password"
          isRequired
          fieldId="simple-pass"
          helperText="Please provide Docker password"
        >
          <TextInput
            isRequired
            type="password"
            id="simple-pass"
            name="simple-pass"
            aria-describedby="simple-pass-helper"
            value={value2}
            onChange={this.handleTextInputChange2}
          />
        </FormGroup>

        <FormGroup
          label="Namespace"
          isRequired
          fieldId="simple-form-name"
          helperText="Please provide namespace for container"
        >
          <TextInput
            isRequired
            type="text"
            id="simple-name"
            name="simple-name"
            aria-describedby="simple-name-helper"
            value={value3}
            onChange={this.handleTextInputChange3}
          />
        </FormGroup>

        <FormGroup
          label="Image Name"
          isRequired
          fieldId="simple-name"
          helperText="Please provide an image name"
        >
          <TextInput
            isRequired
            type="text"
            id="simple-name"
            name="simple-name"
            aria-describedby="simple-name-helper"
            value={value4}
            onChange={this.handleTextInputChange4}
          />
        </FormGroup>

        <FormGroup
          label="Additional Arguments"
          fieldId="simple-args-name"
          helperText="Provide any additional arguments, seperated by spaces and '--' prefix"
        >
          <TextInput
            type="text"
            id="simple-tag-name"
            name="simple-tag-name"
            aria-describedby="simple-tag-name-helper"
            value={value5}
            onChange={this.handleTextInputChange5}
          />
        </FormGroup>

        <ActionGroup>
          <Button variant="primary">Build</Button>
        </ActionGroup>
      </Form>
    );
  }
}

class ControlledRadio extends React.Component {
  state = {
    value: '3'
  };

  handleChange = (_, event) => {
    const { value } = event.currentTarget;
    this.setState({ value });
  };

  render() {
    return (
      <React.Fragment>
        <Radio
          value="1"
          isChecked={this.state.value === '1'}
          name="pf-version"
          onChange={this.handleChange}
          label="scipy"
          id="radio-1"
        />{' '}
        <Radio
          value="2"
          isChecked={this.state.value === '2'}
          name="pf-version"
          onChange={this.handleChange}
          label="tensorflow"
          id="radio-2"
        />{' '}
        <Radio
          value="3"
          isChecked={this.state.value === '3'}
          name="pf-version"
          onChange={this.handleChange}
          label="minimal"
          id="radio-3"
        />
      </React.Fragment>
    );
  }
}


const Build: React.FunctionComponent<{}> = () => (
  <PageSection>
    <Grid gutter="lg" style={{ padding: 10, margin: 10 }}>
      <GridItem span={12} rowSpan={3} style={{ padding: 10, margin: 10 }}>
        <Stack gutter="lg">
          <StackItem style={{ fontSize: 30 }}>Base Image Resources</StackItem>
          <StackItem isFilled>
            <Flex breakpointMods={[{ modifier: FlexModifiers["column"] }]}>
              <FlexItem>
                <Card>
                  <CardBody>
                    <Flex breakpointMods={[{ modifier: FlexModifiers["column"] }, { modifier: FlexModifiers["align-self-center"] }]}>
                      <FlexItem style={{ fontSize: 20}}><b>Upload a Jupyter Notebook</b></FlexItem>
                      <FlexItem><CustomPreviewFileUpload></CustomPreviewFileUpload></FlexItem>
                      <FlexItem style={{ fontSize: 24}} breakpointMods={[{modifier: FlexModifiers["align-self-center"]}]}>OR</FlexItem>
                      <FlexItem style={{ fontSize: 20 }}><b>Select a package</b></FlexItem>
                      <FlexItem>
                        <ControlledRadio></ControlledRadio>
                      </FlexItem>
                    </Flex>
                  </CardBody>
                </Card>
              </FlexItem>
            </Flex>
          </StackItem>
        </Stack>
      </GridItem>
      <GridItem span={12} rowSpan={3} style={{ padding: 10, margin: 10 }}>
        <Stack gutter="lg">
          <StackItem style={{ fontSize: 30 }}>Package Installer</StackItem>
          <Card>
            <CardBody>
              <PackageInstaller></PackageInstaller>
            </CardBody>
          </Card>
        </Stack>
      </GridItem>
      <GridItem span={12} rowSpan={3} style={{ padding: 10, margin: 10 }}>
        <Stack gutter="lg">
          <StackItem style={{ fontSize: 30 }}>Build Details</StackItem>
          <Card>
            <CardBody style={{ padding: 30 }}><SimpleForm></SimpleForm></CardBody>
          </Card>
        </Stack>
      </GridItem>
    </Grid>
  </PageSection>
)

export { Build };
