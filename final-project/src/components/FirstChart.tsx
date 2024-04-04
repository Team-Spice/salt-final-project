import { FormEvent, useState } from "react";
import FirstChartDone from "./FirstChartDone";
import { ReportTypeAll } from "../types";
import Button from "./Button";

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

  const isValidForm = (): boolean => {
    return !!(age || gender);
  };

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
      <h2 className="text-2xl">Thank you for submitting!</h2>
      <p>
        <span className="bolded">{count}</span> other
        people have reported <span className="bolded">{sideEffectName}</span> as
        a side effect for <span className="bolded">{productName}</span>!
      </p>
      <FirstChartDone chartData={chartData} nameSideEffect={sideEffectName} />
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
          <Button type="submit" text="Submit" disabled={!(age || gender)} loading={isLoading} />
          {/* {errorMessage && <p className="p--error">{errorMessage}</p>} */}
        </div>
      </form>
    </>
  );
};

export default FirstChart;
