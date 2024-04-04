import { FormEvent, useState } from "react";
import { SideEffectType } from "../types";
// import Spinner from "./Spinner";
import Button from "./Button";

type SelectFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    sideEffectSelect: { value: string };
  };
};

type SideEffectProps = {
  sideEffects: SideEffectType[] | undefined;
  handleOnClick: (effect: SideEffectType) => void;
};

const SideEffect = ({ sideEffects, handleOnClick }: SideEffectProps) => {
  const [selection, setSelection] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e: SelectFormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { value } = e.target.sideEffectSelect;
    const sideEffect = sideEffects?.find((effect) => effect.name === value);

    sideEffect && handleOnClick(sideEffect);
  };

  return (
    <>
      <h2>Side effects</h2>
      <form
        className="form-side-effect flex flex-col "
        onSubmit={handleFormSubmit}
      >
        <select
          className="select-side-effect w-3/5"
          id="sideEffectSelect"
          onChange={(e) => setSelection(e.target.value)}
        >
          <option value=""></option>
          {sideEffects &&
            sideEffects.sort((a,b) => a.name>b.name? 1:-1).map((effect) => (
              <option key={effect.id} value={effect.name}>
                {effect.name}
              </option>
            ))}
        </select>
        <Button disabled={!selection || isLoading} loading={isLoading} type="submit" text="Next"/>
      </form>
    </>
  );
};

export default SideEffect;
