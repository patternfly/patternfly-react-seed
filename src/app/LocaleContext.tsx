import * as React from 'react';

export interface ILocaleContext {
  locale: string;
  setLocale: (currentLocale: string) => void;
}

export const LocaleContext = React.createContext<ILocaleContext>({ locale: 'en', setLocale: () => undefined });

export const LocaleContextProvider = props => {
  const [locale, setLocale] = React.useState('en');
  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      {props.children}
    </LocaleContext.Provider>
  );
};