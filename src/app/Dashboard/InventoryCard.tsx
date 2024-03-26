import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  DataList,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  Flex,
  Icon,
} from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';

const data = [
  {
    count: 3,
    text: 'Nodes',
  },
  {
    count: 8,
    text: 'Disks',
  },
  {
    count: 20,
    text: 'Pods',
  },
  {
    count: 12,
    text: 'PVs',
  },
  {
    count: 18,
    text: 'PVCs',
  },
];

export const InventoryCard: React.FunctionComponent = () => (
  <Card id="dashboard-demo-data-list-card-1">
    <CardHeader className="pf-v5-u-align-items-flex-start">
      <CardTitle id="dashboard-demo-data-list-card-1-title1">Inventory</CardTitle>
    </CardHeader>
    <DataList
      gridBreakpoint="none"
      aria-label="Simple data list example"
      id="dashboard-demo-data-list-card-1-data-list"
    >
      {data.map(({ count, text }, idx) => (
        <DataListItem key={`item-${idx}`} aria-labelledby={`dashboard-demo-data-list-card-1-data-list-item-${idx + 1}`}>
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key={`${idx}-1`} id={`dashboard-demo-data-list-card-1-data-list-item-${idx + 1}`}>
                  {count} {text}
                </DataListCell>,
                <DataListCell key={`${idx}-2`} isFilled={false} alignRight>
                  <a href="#">
                    <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                      <span>{count}</span>
                      <Icon status="success">
                        <CheckCircleIcon />
                      </Icon>
                    </Flex>
                  </a>
                </DataListCell>,
              ]}
            ></DataListItemCells>
          </DataListItemRow>
        </DataListItem>
      ))}
    </DataList>
  </Card>
);
