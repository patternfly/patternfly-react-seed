import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

const config = {
  dateConfig() {
    dayjs.extend(utc);
    dayjs.extend(relativeTime);
    dayjs.extend(advancedFormat);
  },
};

export { config };
