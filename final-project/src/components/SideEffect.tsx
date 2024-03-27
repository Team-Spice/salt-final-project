import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { SideEffectType } from "../types";

type SelectFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    sideEffectSelect: { value: string }
  }
}

type SideEffectProps = {
  sideEffects: SideEffectType[] | undefined;
  handleOnClick: (effect: SideEffectType) => void;
}

const SideEffect = ({ sideEffects, handleOnClick }: SideEffectProps) => {

  const handleFormSubmit = (e: SelectFormEvent) => {
    e.preventDefault();
    
    const { value } = e.target.sideEffectSelect;
    const sideEffect = sideEffects?.find((effect) => effect.name === value);
    
    sideEffect && handleOnClick(sideEffect);
  };

  return (
    <>
      <h2>Side effects</h2>
      <form onSubmit={handleFormSubmit}>
        <select id="sideEffectSelect">
          {sideEffects && sideEffects.map(effect => <option key={effect.id} value={effect.name}>{effect.name}</option>)}
        </select>
        <button type="submit">next</button>
      </form>
      <Link to="/">
        <button>back</button>
      </Link>
    </>
  );
};

export default SideEffect;
