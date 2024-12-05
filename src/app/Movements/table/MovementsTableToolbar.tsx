import { Category } from '@app/model/Category';
import { Movement } from '@app/model/Movement';
import { MovementTypes } from '@app/model/MovementTypes';
import { MovementsQuery } from '@app/model/query/MovementsQuery';
import {
  Badge,
  Button,
  DatePicker,
  MenuToggle,
  MenuToggleElement,
  Select,
  SelectList,
  SelectOption,
  TextInput,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Tooltip,
} from '@patternfly/react-core';
import { PlusIcon, RedoIcon, TimesIcon, UploadIcon } from '@patternfly/react-icons';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

type DatePickerType = {
  value?: string;
  date?: Date;
};

type MovementsTableToolbarProps = {
  disabled: boolean;
  query: MovementsQuery;
  queryChangeCallback: (query: MovementsQuery) => void;
  createMovementCallback: () => void;
  refetchMovementsCallback: () => void;
  bulkLoadCallback: () => void;
  categories?: Category[];
};

const MovementsTableToolbar = ({
  disabled,
  queryChangeCallback,
  createMovementCallback,
  refetchMovementsCallback,
  bulkLoadCallback,
  query,
  categories,
}: MovementsTableToolbarProps) => {
  const [startDate, setStartDate] = React.useState<DatePickerType>({ value: query.from });
  const [endDate, setEndDate] = React.useState<DatePickerType>({ value: query.to });
  const [name, setName] = React.useState<string | undefined>(query.name ?? '');
  const [amount, setAmount] = React.useState<string | undefined>(query.amount ? `${query.amount}` : '');

  const [isCategoriesSelectOpen, setIsCategoriesSelectOpen] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState<Category[]>([]);

  const [isTypesSelectOpen, setIsTypesSelectOpen] = React.useState(false);
  const [selectedTypes, setSelectedTypes] = React.useState<Movement['type'][]>([]);

  // TODO: use formik
  const clearValues = () => {
    setStartDate({});
    setEndDate({});
    setName('');
    setAmount('');
    setSelectedCategories([]);
    setIsCategoriesSelectOpen(false);
    setSelectedTypes([]);
    setIsTypesSelectOpen(false);
  };

  const onChangeQuery = useDebouncedCallback((query: MovementsQuery) => {
    queryChangeCallback(query);
  }, 350);

  React.useEffect(
    () => {
      const newQuery = {
        ...query,
        name: name && name.trim().length > 0 ? name.trim() : undefined,
        amount: amount && amount.trim().length > 0 ? +amount : undefined,
        from: startDate.value,
        to: endDate.value,
        categories: selectedCategories.length ? selectedCategories.map((e) => e.id) : undefined,
        types: selectedTypes.length ? selectedTypes : undefined,
      };
      if (JSON.stringify(newQuery) !== JSON.stringify(query)) {
        onChangeQuery(newQuery);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [startDate, endDate, name, amount, selectedCategories, selectedTypes, onChangeQuery],
  );

  return (
    <Toolbar>
      <ToolbarContent>
        <ToolbarGroup variant="label-group">
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
          <ToolbarItem>
            <TextInput
              type="text"
              value={name ?? undefined}
              placeholder="Concepto"
              onChange={(_event, name) => setName(name)}
              aria-label="movement name to filter"
              isDisabled={disabled}
            />
          </ToolbarItem>
          <ToolbarItem>
            <TextInput
              type="number"
              value={amount ?? undefined}
              placeholder="Importe"
              onChange={(_event, amount) => setAmount(amount)}
              aria-label="amount to filter"
              min={0}
              max={100000}
              isDisabled={disabled}
            />
          </ToolbarItem>
          <ToolbarItem>
            <Select
              role="menu"
              id="categories-select"
              isOpen={isCategoriesSelectOpen}
              selected={selectedCategories}
              onSelect={(_e, categoryId) => {
                const category = categories?.find((c) => c.id === categoryId);
                if (category) {
                  if (selectedCategories.includes(category)) {
                    setSelectedCategories(selectedCategories.filter((e) => e.id !== categoryId));
                  } else {
                    setSelectedCategories([...selectedCategories, category]);
                  }
                }
              }}
              onOpenChange={(nextOpen: boolean) => setIsCategoriesSelectOpen(nextOpen)}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={() => setIsCategoriesSelectOpen(!isCategoriesSelectOpen)}
                  isExpanded={isCategoriesSelectOpen}
                  style={{ width: '190px' }}
                  isDisabled={disabled}
                >
                  Categorías {selectedCategories.length > 0 && <Badge isRead>{selectedCategories.length}</Badge>}
                </MenuToggle>
              )}
            >
              <SelectList>
                {categories?.map((category) => (
                  <SelectOption
                    isDisabled={disabled}
                    hasCheckbox
                    key={category.id}
                    value={category.id}
                    isSelected={selectedCategories.includes(category)}
                  >
                    {category.name}
                  </SelectOption>
                ))}
              </SelectList>
            </Select>
          </ToolbarItem>
          <ToolbarItem>
            <Select
              role="menu"
              id="type-select"
              isOpen={isTypesSelectOpen}
              selected={selectedTypes}
              onSelect={(_e, type) => {
                if (selectedTypes.includes(type as Movement['type'])) {
                  setSelectedTypes(selectedTypes.filter((t) => t !== (type as Movement['type'])));
                } else {
                  setSelectedTypes([...selectedTypes, type as Movement['type']]);
                }
              }}
              onOpenChange={(nextOpen: boolean) => setIsTypesSelectOpen(nextOpen)}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={() => setIsTypesSelectOpen(!isTypesSelectOpen)}
                  isExpanded={isTypesSelectOpen}
                  style={{ width: '190px' }}
                  isDisabled={disabled}
                >
                  Tipos {selectedTypes.length > 0 && <Badge isRead>{selectedTypes.length}</Badge>}
                </MenuToggle>
              )}
            >
              <SelectList>
                {MovementTypes.map((type) => (
                  <SelectOption
                    isDisabled={disabled}
                    hasCheckbox
                    key={type}
                    value={type}
                    isSelected={selectedTypes.includes(type)}
                  >
                    {type}
                  </SelectOption>
                ))}
              </SelectList>
            </Select>
          </ToolbarItem>
          <ToolbarItem>
            <Tooltip content="Limpiar filtro">
              <Button icon={<TimesIcon />} onClick={clearValues} size="sm" />
            </Tooltip>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup variant="action-group">
          <ToolbarItem>
            <Tooltip content="Carga masiva">
              <Button variant="primary" onClick={bulkLoadCallback} icon={<UploadIcon />} size="sm" />
            </Tooltip>
          </ToolbarItem>
          <ToolbarItem>
            <Tooltip content="Crear movimiento">
              <Button variant="primary" onClick={createMovementCallback} icon={<PlusIcon />} size="sm" />
            </Tooltip>
          </ToolbarItem>
          <ToolbarItem>
            <Tooltip content="Recargar movimientos">
              <Button variant="primary" onClick={refetchMovementsCallback} icon={<RedoIcon />} size="sm" />
            </Tooltip>
          </ToolbarItem>
        </ToolbarGroup>
      </ToolbarContent>
    </Toolbar>
  );
};

export { MovementsTableToolbar };
