import { FunctionalComponent } from "preact";

export const getNextYear = () => new Date().getFullYear() + 1;

type NextYearProps = { offset?: number };

export const NextYear: FunctionalComponent<NextYearProps> = ({
  offset = 0,
}) => <span className="year">{getNextYear() + offset}</span>;

export const getSeconds = () => {
  const now = Date.now();
  const newYear = new Date(getNextYear(), 0, 1).valueOf();

  return (newYear - now) / 1000;
};
