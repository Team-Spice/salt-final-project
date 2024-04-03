import { FormEvent, useState } from "react";
import { SideEffectType } from "../types";

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

  const handleFormSubmit = (e: SelectFormEvent) => {
    e.preventDefault();

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
            sideEffects.map((effect) => (
              <option key={effect.id} value={effect.name}>
                {effect.name}
              </option>
            ))}
        </select>
        <button
          disabled={!selection}
          className={`button button--primary w-24 self-center ${
            !selection && "button--disabled"
          }`}
          type="submit"
        >
          Next
        </button>
      </form>
    </>
  );
};

export default SideEffect;
