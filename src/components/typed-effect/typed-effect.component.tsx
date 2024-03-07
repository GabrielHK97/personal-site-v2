import { useEffect, useState } from "react";

type TypedEffectProps = {
  value: string;
};

const defaultProps: TypedEffectProps = {
  value: "",
};

export function TypedEffect(props: TypedEffectProps) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval: any = null;

  const [value, setValue] = useState(props.value);

  function doEffect(): void {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      setValue(
        value
          .split("")
          .map((letter: any, index: any) => {
            if (index < iteration) {
              return value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
          .toUpperCase()
      );

      if (iteration >= value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 4;
    }, 30);
  }

  useEffect(() => {
    setValue(props.value);
    doEffect();
  }, [props.value]);

  return <div onMouseOver={doEffect}>{value}</div>;
}

TypedEffect.defaultProps = defaultProps;
