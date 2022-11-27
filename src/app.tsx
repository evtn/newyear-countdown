import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import "./app.css";
import { Counter, sizes } from "./counter";
import { Snowflakes } from "./snowflakes";
import { getSeconds, NextYear } from "./year";

export type Scheme = "dark" | "light";

export const App: FunctionalComponent = () => {
  const [scheme, setScheme] = useState("dark");
  const [seconds, setSeconds] = useState(getSeconds());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setSeconds(getSeconds());
    }, 500);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    const scheme = window.matchMedia("(prefers-color-scheme: light)");

    if (scheme.matches) {
      setScheme("light");
    }

    scheme.addEventListener("change", (e) => {
      if (e.matches) {
        setScheme("light");
      } else {
        setScheme("dark");
      }
    });
  }, []);

  return (
    <main className={`scheme-${scheme}`}>
      {[10, 11, 0, 1, 2].includes(new Date().getMonth()) ? (
        <Snowflakes />
      ) : null}
      <a
        className="source-link"
        href="https://github.com/evtn/newyear-countdown"
      >
        Source
      </a>
      <p className="mainpage-link">
        Don't forget to check out <a href="//evtn.me">my other stuff</a>
      </p>
      {seconds > 360 * 86400 ? (
        <h2>
          Well, let's wait for <NextYear offset={1} /> now
        </h2>
      ) : null}
      <h1>
        <NextYear /> <span>ends in</span>
      </h1>
      <div className="counter-container">
        {sizes.map((e, i) =>
          e < seconds ? <Counter seconds={seconds} sizeIndex={i} /> : null
        )}
      </div>
    </main>
  );
};
