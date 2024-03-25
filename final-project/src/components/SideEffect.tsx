import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const SideEffect = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/FirstChart");
  };
  return (
    <>
      <h2>Side effects</h2>
      <form onSubmit={handleFormSubmit}>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
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
