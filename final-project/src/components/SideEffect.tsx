import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

type SelectFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    sideEffectSelect: { value: string }
  }
}

const SideEffect = ({ sideEffects }: { sideEffects: string[] | undefined }) => {
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
          {sideEffects && sideEffects.map(effect => <option key={effect} value={effect}>{effect}</option>)}
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
