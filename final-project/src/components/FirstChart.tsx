import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { FormEvent } from "react";

const ageGroup = [
  '0-10',
  '11-20',
  '21-30',
  '31-40',
  '41-50',
  '51-60',
  '61-70',
  '71-80',
  '81-90',
  '91-'
];

type SelectFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    formAge: { value: string }
  }
}

const FirstChart = ({ product }: { product: Product | undefined }) => {
  const navigate = useNavigate();

  const handleSubmit = (e: SelectFormEvent) => {
    e.preventDefault();
    console.log(e.target.formAge.value)
    navigate("/MainChart");
  };
  return (
    <>
      <p>
        Thank you for submitting, n number of people have reported this side
        effect for {product?.name}!
      </p>
      <p>INSERT CHART HERE</p>
      <p>Want to see more?</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="formAge">Age</label>
        <select name="formAge" id="formAge">
          {ageGroup.map(group => <option key={group} value={group}>{group}</option>)}
        </select>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default FirstChart;
