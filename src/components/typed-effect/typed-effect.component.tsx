import './typed-effect.style.css'
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
  const [originalValue, setOriginalValue] = useState(props.value);

  function doEffect(): void {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      setValue(
        originalValue
          .split("")
          .map((letter: any, index: any) => {
            if (index < iteration) {
              return originalValue[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
          .toUpperCase()
      );

      if (iteration >= originalValue.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);
  }

  useEffect(() => {
    setValue(props.value);
    setOriginalValue(props.value);
    doEffect();
  }, [props.value]);

  return <div className="typed" onMouseOver={doEffect}>{value}</div>;
}

TypedEffect.defaultProps = defaultProps;
