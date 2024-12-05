import { Movement } from '@app/model/Movement';
import dayjs from 'dayjs';

const excelBulkTreatment = (content: string): Movement[] =>
  content
    .split('\n')
    .map((line) => line.split('\t'))
    .filter((lineArr: string[]) => lineArr.length === 3)
    .reduce(
      (movements: Movement[], lineArr: string[]) => [
        ...movements,
        {
          date: dayjs(lineArr[0], 'DD/MM/YYYY').toDate().getTime(),
          name: lineArr[1],
          amount: +lineArr[2],
        } as Movement,
      ],
      [] as Movement[],
    );

export { excelBulkTreatment };
