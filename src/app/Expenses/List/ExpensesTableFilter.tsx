import { Category } from '@app/model/Category';
import { ExpensesQuery } from '@app/model/query/ExpensesQuery';
import {
  Button,
  DatePicker,
  TextInput,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

type DatePickerType = {
  value?: string;
  date?: Date;
};

type ExpensesTableFilterProps = {
  disabled: boolean;
  query: ExpensesQuery;
  queryChangeCallback: (query: ExpensesQuery) => void;
  categories: Category[];
};

const ExpensesTableFilter = ({ disabled, queryChangeCallback, query }: ExpensesTableFilterProps) => {
  const [startDate, setStartDate] = React.useState<DatePickerType>({ value: query.from });
  const [endDate, setEndDate] = React.useState<DatePickerType>({ value: query.to });
  const [name, setName] = React.useState<string | undefined>(query.name ?? '');
  const [amount, setAmount] = React.useState<string | undefined>(query.amount ? `${query.amount}` : '');

  // TODO: use formik
  const clearValues = () => {
    setStartDate({});
    setEndDate({});
    setName('');
    setAmount('');
  };

  const onChangeQuery = useDebouncedCallback((query: ExpensesQuery) => {
    queryChangeCallback(query);
  }, 350);

  React.useEffect(
    () =>
      onChangeQuery({
        ...query,
        name: name && name.trim().length > 0 ? name.trim() : undefined,
        amount: amount && amount.trim().length > 0 ? +amount : undefined,
        from: startDate.value,
        to: endDate.value,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [startDate, endDate, name, amount, onChangeQuery],
  );

  return (
    <Toolbar>
      <ToolbarContent>
        <ToolbarGroup variant="filter-group">
          <ToolbarItem>
            <DatePicker
              onChange={(_, value, date) => setStartDate({ value, date })}
              onBlur={(_, value, date) => setStartDate({ value, date })}
              value={startDate?.value}
              isDisabled={disabled}
            />
          </ToolbarItem>
          <ToolbarItem>
            <DatePicker
              onChange={(_, value, date) => setEndDate({ value, date })}
              onBlur={(_, value, date) => setEndDate({ value, date })}
              value={endDate?.value}
              isDisabled={disabled}
            />
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem>
          <TextInput
            type="text"
            value={name ?? undefined}
            placeholder="Concepto"
            onChange={(_event, name) => setName(name)}
            aria-label="expense name to filter"
          />
        </ToolbarItem>
        <ToolbarItem>
          <TextInput
            type="number"
            value={amount ?? undefined}
            placeholder="Importe"
            onChange={(_event, amount) => setAmount(amount)}
            aria-label="provider name to filter"
            min={0}
            max={100000}
          />
        </ToolbarItem>
        <ToolbarItem>{/* categorias */}</ToolbarItem>
        <ToolbarItem>
          <Button icon={<TimesIcon />} onClick={clearValues} />
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );
};

export { ExpensesTableFilter };
