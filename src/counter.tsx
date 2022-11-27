import { FunctionalComponent } from "preact";

export const sizes = [86400, 3600, 60, 1] as const;
const sizeNames = ["day", "hour", "minute", "second"];

type CounterProps = {
    seconds: number;
    sizeIndex: number;
};

export const Counter: FunctionalComponent<CounterProps> = ({
    seconds,
    sizeIndex,
}) => {
    if (sizeIndex != 0) {
        seconds = seconds % sizes[sizeIndex - 1];
    }

    const size = sizes[sizeIndex];
    const amount = Math.floor(seconds / size);
    const sizeName = `${sizeNames[sizeIndex]}${
        amount % 100 != 11 && amount % 10 == 1 ? " " : "s"
    }`;

    const amountStr = amount + ""; //.replace("0", "");
    const zeroCount = Math.max(0, 3 - amountStr.length);

    return (
        <p className="counter">
            <span className="amount" data-zeros={" ".repeat(zeroCount)}>
                {amountStr}
            </span>{" "}
            <span className="amount-name">{sizeName}</span>
        </p>
    );
};
