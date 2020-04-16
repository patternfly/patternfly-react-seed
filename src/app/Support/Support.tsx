/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { CubesIcon } from '@patternfly/react-icons';
import {
  PageSection,
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';
import { useTranslation } from 'react-i18next';
import { LocaleContext } from '../LocaleContext';

// using polyfill in i18n.js
// @ts-ignore
const IntlRelativeTimeFormat = Intl.RelativeTimeFormat;

export interface ISupportProps {
  sampleProp?: string;
}

const LocalizedDate = ({ locale, date }) => (
  <div>
    <strong>Localized date: </strong>
    {new Intl.DateTimeFormat(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(date)}
  </div>
);

const LocalizedTime = ({ locale, date }) => (
  <div>
    <strong>Localized time: </strong>
    {new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(date)}
  </div>
);

const LocalizedRelativeTime = ({ locale }) => (
  <div>
    <strong>Localized relative time (consumer is responsible to auto-update the time if needed): </strong>
    {new IntlRelativeTimeFormat(locale, { numeric: 'auto' }).format(-1, 'second')}
  </div>
);

const LocalizedNumber = ({ locale }) => {
  try {
    return (
      <>
        <div>
          <strong>Localized number: </strong>
          {new Intl.NumberFormat(locale).format(1000)}
        </div>
        <div>
          <strong> As a unit (Intl.NumberFormat supports units only for Chrome 77+ at the moment, otherwise polyfill or other lib is required): </strong>
          {new Intl.NumberFormat(locale, {
            style: 'unit',
            // @ts-ignore
            unit: 'kilobyte'
          }).format(16384)}
        </div>
      </>
    );
  } catch(err) {
    return <span>Intl.NumberFormat supports units only for Chrome 77+ at the moment, otherwise polyfill or other lib is required</span>;
  }
}

const LocalizedCurrency = ({ locale }) => {
  // simplified since you'd also want to consider region, e.g. en_US (USD) vs en_GB (GBP)
  let currency = 'USD';
  if (locale === 'en') {
    currency = 'USD';
  } else if (locale === 'ar') {
    currency = 'AFN';
  } else if (locale === 'de' || locale === 'fr' ) {
    currency = 'EUR';
  } else if (locale === 'zh') {
    currency = 'CNY';
  }
  return (
  <div>
    <strong>Localized currency for {locale}: </strong>
    {new Intl.NumberFormat(locale, { style: 'currency', currency }).format(1200.24)}
  </div>
)};

const Support: React.FunctionComponent<ISupportProps> = () => {
  const { t } = useTranslation();
  const { locale } = React.useContext(LocaleContext);
  return (
    <PageSection>
      <EmptyState variant={EmptyStateVariant.full}>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h1" size="lg">
          {t('supportTitle', 'Empty State (Stub Support Module)')}
        </Title>
        <EmptyStateBody>
          <div>
            <strong>Localized message: </strong>
            {t('supportBody', `This represents the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.`)}
          </div>
          <div>
            <strong>Message with arguments and plurality aware (Some languages like Arabic have multiple cases): </strong><br />
            {t('supportCats', { count: 0, defaultValue: `(singular) You have {{count}} cat.`})}<br />
            {t('supportCats', { count: 1, defaultValue: `(singular) You have {{count}} cat.` })}<br />
            {t('supportCats', { count: 2, defaultValue: `(singular) You have {{count}} cat.` })}<br />
            {t('supportCats', { count: 3, defaultValue: `(singular) You have {{count}} cat.` })}<br />
            {t('supportCats', { count: 4, defaultValue: `(singular) You have {{count}} cat.` })}<br />
            {t('supportCats', { count: 5, defaultValue: `(singular) You have {{count}} cat.` })}<br />
            {t('supportCats', { count: 11, defaultValue: `(singular) You have {{count}} cat.` })}<br />
            {t('supportCats', { count: 99, defaultValue: `(singular) You have {{count}} cat.` })}<br />
            {t('supportCats', { count: 100, defaultValue: `(singular) You have {{count}} cat.` })}
          </div>
          <LocalizedDate locale={locale} date={new Date(1459913574887)} />
          <LocalizedTime locale={locale} date={new Date(1459913574887)} />
          <LocalizedRelativeTime locale={locale} />
          <LocalizedNumber locale={locale} />
          <LocalizedCurrency locale={locale} />
        </EmptyStateBody>
        <Button variant="primary">
          {t('supportButtonPrimary', 'Primary Action')}
        </Button>
        <EmptyStateSecondaryActions>
          <Button variant="link">Multiple</Button>
          <Button variant="link">Action Buttons</Button>
          <Button variant="link">Can</Button>
          <Button variant="link">Go here</Button>
          <Button variant="link">In the secondary</Button>
          <Button variant="link">Action area</Button>
        </EmptyStateSecondaryActions>
      </EmptyState>
    </PageSection>
  )
};

export { Support };
