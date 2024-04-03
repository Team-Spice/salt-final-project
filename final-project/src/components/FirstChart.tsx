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
  const [isLoading, setIsLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  const isValidForm = ():boolean => {
    return !!(age || gender);
  }

  const handleSubmit = (e: InputFormEvent) => {
    e.preventDefault();
    if (!isValidForm()) {
      // setErrorMessage("All fields cannot be empty");
      return;
    }
    // setErrorMessage("");
    setIsLoading(true);
    onAgeAndGenderSelected(age, gender);
  };

  return (
    <>
      <p>
        Thank you for submitting, <span className="bolded">{count}</span> other
        people have reported <span className="bolded">{sideEffectName}</span> as
        a side effect for <span className="bolded">{productName}</span>!
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
            {isLoading ?
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg> :
              'Submit'
            }
          </button>
          {/* {errorMessage && <p className="p--error">{errorMessage}</p>} */}
        </div>
      </form>
    </>
  );
};

export default FirstChart;
