import * as React from 'react';
import {
  Select, 
  SelectOption,
  SelectOptionObject
} from '@patternfly/react-core';
import { LocaleContext } from '../LocaleContext';

const LangSelector: React.FunctionComponent = () => {
  const langOptions = [
    { value: 'English', locale: 'en' },
    { value: 'French', locale: 'fr' },
    { value: 'Arabic', locale: 'ar' },
    { value: 'German', locale: 'de' },
    { value: 'Chinese', locale: 'zh' }
  ];
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [selected, setSelected] = React.useState(langOptions[0].value);
  const { setLocale } = React.useContext(LocaleContext);

  return (
    <Select
      aria-label="Select language"
      onToggle={(expanded: boolean) => setIsExpanded(expanded)}
      onSelect={(event: React.MouseEvent | React.ChangeEvent, value: string | SelectOptionObject) => {
        debugger;
        setSelected(value as string); 
        setIsExpanded(false);
        const match = langOptions.find((option) => option.value === value);
        setLocale(match ? match.locale : 'en');
      }}
      selections={selected}
      isExpanded={isExpanded}
    >
      {langOptions.map((option, index) => (
        <SelectOption
          key={index}
          value={option.value}
        />
      ))}
    </Select>
  );
}

export { LangSelector };
