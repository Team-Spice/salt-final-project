import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SideEffectType } from "../types";

type SelectFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    sideEffectSelect: { value: string }
  }
}

type SideEffectProps = {
  sideEffects: SideEffectType[] | undefined;
}

const SideEffect = ({ sideEffects }: SideEffectProps) => {
  const navigate = useNavigate();

  const handleFormSubmit = (e: SelectFormEvent) => {
    e.preventDefault();
    console.log(e.target.sideEffectSelect.value);
    navigate("/FirstChart");
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
