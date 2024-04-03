import { FormEvent, useState } from "react";
import FirstChartDone from "./FirstChartDone";
import { ReportTypeAll } from "../types";

type InputFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    formAge: { value: string };
  };
};

type FirstChartProps = {
  productName: string | undefined;
  sideEffectName: string | undefined;
  count: string | undefined;
  reportId: number;
  chartData: ReportTypeAll[];
  onAgeAndGenderSelected: (selectedAge: string, selectedGender: string) => void;
};

const FirstChart = ({
  productName,
  sideEffectName,
  count,
  chartData,
  onAgeAndGenderSelected,
}: FirstChartProps) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const isValidForm = ():boolean => {
    return !!(age && gender);
  }

  const handleSubmit = (e: InputFormEvent) => {
    e.preventDefault();
    if (!isValidForm()) {
      // setErrorMessage("All fields cannot be empty");
      return;
    }
    // setErrorMessage("");
    onAgeAndGenderSelected(age, gender);
  };

  return (
    <>
      <p>
        Thank you for submitting, {count} other people have reported{" "}
        {sideEffectName} as a side effect for {productName}!
      </p>
      <FirstChartDone chartData={chartData} />
      <p>Want to see more?</p>
      <form className="form-age-first-chart" onSubmit={handleSubmit}>
        <label htmlFor="formAge">Age</label>
        <input
          className="input-age"
          value={age}
          onChange={(a) => setAge(a.target.value)}
          type="number"
          min={0}
        ></input>
        <div className="div-gender-select-submit">
          <label htmlFor="gender">Select Gender</label>
          <select
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button className={`button--primary w-fit self-center ${ !(age || gender) && 'button--disabled' }`} type="submit">
            Submit
          </button>
          {/* {errorMessage && <p className="p--error">{errorMessage}</p>} */}
        </div>
      </form>
    </>
  );
};

export default FirstChart;
