import { FunctionalComponent } from "preact";

export const getNextYear = () => new Date().getFullYear() + 1;

export const NextYear: FunctionalComponent<{ offset?: number }> = ({
  offset,
}) => {
  const currentYear = getNextYear() - 1;
  return <span className="year">{currentYear + (offset || 0)}</span>;
};

export const getSeconds = () => {
  const nextYear = getNextYear();
  const newYear = new Date(nextYear, 0, 1).valueOf();
  return (newYear - Date.now()) / 1000;
};
