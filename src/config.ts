import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const config = {
  dateConfig() {
    dayjs.extend(utc);
    dayjs.extend(relativeTime);
    dayjs.extend(advancedFormat);
    dayjs.extend(customParseFormat);
  },
};

export { config };
