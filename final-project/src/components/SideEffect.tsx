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
        <button
          disabled={!selection || isLoading}
          className={`button button--primary w-24 self-center ${
            !selection && "button--disabled"
          }`}
          type="submit"
        >
          {isLoading ? <>
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            </> :
            'Next'}
        </button>
      </form>
    </>
  );
};

export default SideEffect;
