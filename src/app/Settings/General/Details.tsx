import * as React from 'react';
import { CubesIcon } from '@patternfly/react-icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';
import {
  Accordion, AccordionItem, AccordionContent, AccordionToggle, Page,
  PageHeader,
  PageSection,
  Gallery,
  GalleryItem,
  PageSectionVariants,
  TextContent,
  Title,
  Label,
  Text,
  Card, CardTitle, CardBody, CardFooter,
  TextVariants } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth
} from '@patternfly/react-table';
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';
import {
  PageSection,
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  TextContent,
  Text,
  TextVariants,
  TextList,
  TextListVariants,
  TextListItem,
  TextListItemVariants
} from '@patternfly/react-core';
import { PageSection, Title } from '@patternfly/react-core';


class SortableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Control', transforms: [sortable] },
        'Name',
        { title: 'Status', transforms: [sortable] }
      ],
      rows: [
        ['CP-1', 'Relatively Long Control Title 1', 'complete'],
        ['CP-2', 'Relatively Long Control Title 2', 'unknown'],
        ['CP-3', 'Relatively Long Control Title 3', 'not applicable'],
        ['CP-4', 'Relatively Long Control Title 4', 'not applicable'],
        ['CP-5', 'Relatively Long Control Title 5', 'unknown']
            ],
      sortBy: {}
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  render() {
    const { columns, rows, sortBy } = this.state;

    return (
      <Table sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}



const Details: React.FunctionComponent = (props) => (
  <PageSection>
    <Title headingLevel="h1" size="lg">
       Component Details
    </Title>
    
      <Breadcrumb>
        <BreadcrumbItem to="#">Ongoing Authorization</BreadcrumbItem>
        <BreadcrumbItem to="#">Base Images</BreadcrumbItem>
        <BreadcrumbItem to="#">Red Hat Enterprise Linux 9 UBI</BreadcrumbItem>
      </Breadcrumb>
      
          <Card isHoverable>
            <CardTitle><Text component={TextVariants.h1}><center><b>NIST Special Publication 800-53 revision 4<br />Contingency Planning Control Family</b></center></Text></CardTitle>
            <CardBody><SortableTable /></CardBody>
            <CardFooter>
            </CardFooter>
          </Card>

          <Card isHoverable>
            <CardTitle>
              <TextContent>
                <Text component={TextVariants.h1}><center><b>CP-12: Safe Mode</b></center></Text>
              </TextContent>
              </CardTitle>
              <CardBody>

            <TextContent>
            <Text component={TextVariants.h2}><center>“The information system, when [Assignment: organization-defined conditions] are detected, enters a safe mode of operation with [Assignment: organization-defined restrictions of safe mode of operation].”</center></Text>
          </TextContent>
          <p>
            <br /><hr /><br/>
          </p>
          <Alert
            variant="success"
            isInline
            title="Implementation Status: Complete"
          />
         
          <p>
            <br /><hr /><br />
          </p>
          <TextContent>
            <Text component={TextVariants.h2}><b>CP-12: What is the solution and how is it implemented?</b></Text>
          </TextContent>
          <TextContent>
            <Text component={TextVariants.p}>Control response goes here.</Text>
          </TextContent>  
            </CardBody>
            <CardFooter>
            </CardFooter>
          </Card>

  </PageSection>
);

export { Details };
