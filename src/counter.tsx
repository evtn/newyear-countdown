import { FunctionalComponent } from "preact";

const sizes = [86400, 3600, 60, 1] as const;

type CounterProps = {
    seconds: number;
};

export const Counter: FunctionalComponent<CounterProps> = ({ seconds }) => {
    const parts = sizes.map((size, i) => {
        const amount = Math.floor(seconds / size);
        const maxChars = i ? 2 : 3;
        const zeroes = "0".repeat(maxChars - amount.toString().length);
        const colon = i ? ":" : "";
        const prefix = `${colon}${zeroes}`;

        seconds = seconds % size;

        return (
            <span key={i}>
                <span className="prefix">{prefix}</span>
                <span className="amount">{amount}</span>
            </span>
        );
    });

    return <p className="counter">{parts}</p>;
};
