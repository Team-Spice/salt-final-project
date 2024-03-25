import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const FirstChart = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/MainChart");
  };
  return (
    <>
      <p>
        Thank you for submitting, n number of people have reported this side
        effect!
      </p>
      <p>INSERT CHART HERE</p>
      <p>Want to see more?</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="formAge">Age</label>
        <input type="text" id="formAge" />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default FirstChart;
