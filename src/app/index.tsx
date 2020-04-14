/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import '@app/app.css';
import { IntlProvider } from 'react-intl';
import messages_fr from '../translations/fr.json';
import messages_ar from '../translations/ar.json';
import messages_de from '../translations/de.json';
import messages_zh from '../translations/zh.json';
import { LocaleContext } from './LocaleContext';

const messages = {
  'en': null,
  'fr': messages_fr,
  'ar': messages_ar,
  'de': messages_de,
  'zh': messages_zh
}

const App: React.FunctionComponent = () => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <>
    <div>Current locale: {locale}</div>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </Router>
    </IntlProvider>
    </>
  );
};

export { App };
