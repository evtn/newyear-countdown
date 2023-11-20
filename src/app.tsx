import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Counter } from "./counter";
import { Snowflakes } from "./snowflakes";
import { getSeconds, NextYear } from "./year";

import "./app.css";
import "./colors.css";

const winterMonths = new Set([0, 1, 2, 10, 11]);

const isWinter = () => {
  const month = new Date().getMonth();

  return winterMonths.has(month);
};

export const App: FunctionalComponent = () => {
  const [seconds, setSeconds] = useState(getSeconds());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setSeconds(getSeconds());
    }, 500);

    return () => clearInterval(intervalID);
  }, []);

  const isYearStart = seconds > 360 * 86400;

  return (
    <main>
      {isWinter() ? <Snowflakes /> : undefined}

      <a
        className="source-link"
        href="https://github.com/evtn/newyear-countdown"
      >
        Source
      </a>

      <a href="//evtn.me">My stuff</a>

      {isYearStart ? (
        <h2>
          Hooray! Now let's wait for <NextYear />
        </h2>
      ) : undefined}

      <Counter seconds={seconds} />

      <h1>
        <span className="prefix">left until </span>
        <NextYear />
      </h1>
    </main>
  );
};
