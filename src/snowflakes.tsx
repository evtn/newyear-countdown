import { FunctionalComponent } from "preact";

const count = Math.ceil((window.innerWidth * window.innerHeight) / 40000);
console.log(count);

const generatedSnowflakes = (
    <>
        {[...Array(count)].map((_, i) => (
            <div className={`flake flake-${i}`}></div>
        ))}
        <style>
            {[...Array(count)].map(
                (_, i) => `
                    .flake-${i} {
                        left: ${Math.random() * 100}%; 
                        animation-delay: 
                            -${Math.random() * 10}s, 
                            -${Math.random() * 3}s
                        ;
                        height: ${Math.random() * 10}vh;
                        width: ${Math.random() * 10}vw;
                    }
                `
            )}
        </style>
    </>
);
export const Snowflakes: FunctionalComponent = () => (
    <div class="snowflakes">{generatedSnowflakes}</div>
);
