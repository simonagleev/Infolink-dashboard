import dayjs, { OpUnitType, QUnitType } from "dayjs";

export const DIMENSION: QUnitType | OpUnitType = "day";
export const LABEL_FORMAT = "YYYY-MM-DD";
export const GENESIS = "1970-01-01";

export type stamp = number;

export const stampLabel = (stamp: stamp, format = LABEL_FORMAT) => {
  const start = dayjs(GENESIS);
  const current = start.add(stamp, DIMENSION);
  return current.format(format);
};

export const getMomentStamp = (end = dayjs()): stamp => {
  const start = dayjs(GENESIS);
  return end.diff(start, DIMENSION);
};

export const fromMomentStamp = (n: stamp) => {
  const start = dayjs(GENESIS);
  return start.add(n, DIMENSION);
};

export const toStockDate = (stamp: number) => {
  const date = fromMomentStamp(stamp);
  return {
    time: {
      day: date.date(),
      month: date.month() + 1,
      year: date.year(),
    },
  };
};

export const fromStockDate = ({
  day,
  month,
  year,
}: {
  day: number;
  month: number;
  year: number;
}) => {
  let start = dayjs(GENESIS);
  start = start.date(day);
  start = start.month(month - 1);
  start = start.year(year);
  return getMomentStamp(start);
};

export const parse = (date: string) => dayjs(date, LABEL_FORMAT);

export default getMomentStamp;
