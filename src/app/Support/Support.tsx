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
import { 
  defineMessages, 
  FormattedMessage, 
  FormattedDate, 
  FormattedTime, 
  FormattedRelativeTime, 
  FormattedNumber
} from 'react-intl';
import { LocaleContext } from '../LocaleContext';

const messages = defineMessages({
  supportTitle: {
    id: 'supportTitle',
    defaultMessage: 'Empty State (Stub Support Module)'
  },
  supportBody: {
    id: 'supportBody',
    defaultMessage: `This represents the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.`
  },
  supportButtonPrimary: {
    id: 'supportButtonPrimary',
    defaultMessage: `Primary Action`
  },
  supportCats: {
    id: 'supportCats',
    defaultMessage: "You have {count, plural, =0 {no cats} one {# cat} other {# cats}}."
  }
});

export interface ISupportProps {
  sampleProp?: string;
}

const LocalizedDate = ({ date }) => (
  <div>
    <strong>Localized date: </strong>
    <FormattedDate
      value={date}
      year="numeric"
      month="long"
      day="numeric"
      weekday="long"
    />
  </div>
);

const LocalizedTime = ({ date }) => (
  <div>
    <strong>Localized time: </strong>
    <FormattedTime value={date} />
  </div>
);

const LocalizedRelativeTime = () => (
  <div>
    <strong>Localized relative time: </strong>
    <FormattedRelativeTime value={0} numeric="auto" updateIntervalInSeconds={10} />
  </div>
);

const LocalizedNumber = () => (
  <>
  <div>
    <strong>Localized number: </strong>
    <FormattedNumber value={1000} />
  </div>
  <div>
    <strong> As a unit: </strong>
    <FormattedNumber
      value={16384}
      style="unit"
      unit="kilobyte"
      unitDisplay="narrow"
    />
  </div>
  </>
);

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
    <FormattedNumber
      value={1200.24}
      style="currency"
      currency={currency}
    />
  </div>
)};

const Support: React.FunctionComponent<ISupportProps> = () => {
  const { locale } = React.useContext(LocaleContext);
  return (
    <PageSection>
      <EmptyState variant={EmptyStateVariant.full}>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h1" size="lg">
          <FormattedMessage {...messages.supportTitle} />
        </Title>
        <EmptyStateBody>
          <div>
            <strong>Localized message: </strong>
            <FormattedMessage {...messages.supportBody} />
          </div>
          <div>
            <strong>Message with arguments and plurality aware: </strong>
            <FormattedMessage values={{ count: 0 }} {...messages.supportCats} />{" "}
            <FormattedMessage values={{ count: 1 }} {...messages.supportCats} />{" "}
            <FormattedMessage values={{ count: 8 }} {...messages.supportCats} />
          </div>
          <LocalizedDate date={new Date(1459913574887)} />
          <LocalizedTime date={new Date(1459913574887)} />
          <LocalizedRelativeTime />
          <LocalizedNumber />
          <LocalizedCurrency locale={locale} />
        </EmptyStateBody>
        <Button variant="primary">
          <FormattedMessage {...messages.supportButtonPrimary} />
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
