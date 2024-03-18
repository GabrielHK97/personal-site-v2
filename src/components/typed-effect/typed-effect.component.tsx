import "./typed-effect.style.css";
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
    setInterval(() => {
      doEffect();
    }, 5000);
  }, []);

  return (
    <div className="typed-wrapper">
      <div className="typed-wrapper">
        <div className="before" onMouseOver={doEffect}>
          {value}
        </div>
        <div className="typed" onMouseOver={doEffect}>
          {value}
        </div>
        <div className="after" onMouseOver={doEffect}>
          {value}
        </div>
      </div>
      <div className="typed title-decor title1" onMouseOver={doEffect}>
        {value}
      </div>
      <div className="typed title-decor title2" onMouseOver={doEffect}>
        {value}
      </div>{" "}
      <div className="typed title-decor title3" onMouseOver={doEffect}>
        {value}
      </div>
      <div className="typed title-decor title4" onMouseOver={doEffect}>
        {value}
      </div>
    </div>
  );
}

TypedEffect.defaultProps = defaultProps;
