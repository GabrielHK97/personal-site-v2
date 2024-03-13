import "./typing-effect.style.css";
import { useEffect, useState } from "react";

type TypingEffectProps = {
  value: string;
};

const defaultProps: TypingEffectProps = {
  value: "",
};

export function TypingEffect(props: TypingEffectProps) {
  let interval: any = null;

  const [value, setValue] = useState("");
  const [originalValue, setOriginalValue] = useState(props.value);

  function doEffect() {
    let iteration = 0;
    clearInterval(interval);
    setTimeout(() => {
      interval = setInterval(() => {
        setValue(originalValue.split("").splice(0, iteration).join(""));
        if (iteration >= originalValue.length) {
          clearInterval(interval);
        }
        iteration += 1;
      }, 40);
    }, 1250);
  }

  useEffect(() => {
    setValue("");
    setOriginalValue(props.value);
    doEffect();
  }, []);
  return <span className="typing">{value}</span>;
}

TypingEffect.defaultProps = defaultProps;
