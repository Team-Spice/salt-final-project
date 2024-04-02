// import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { updateReport } from "../api";
import FirstChartDone from "./FirstChartDone";
import { ReportTypeAll } from "../types";

// const ageGroup = [
//   "0-10",
//   "11-20",
//   "21-30",
//   "31-40",
//   "41-50",
//   "51-60",
//   "61-70",
//   "71-80",
//   "81-90",
//   "91-",
// ];

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
  reportId,
  chartData,
  onAgeAndGenderSelected,
}: FirstChartProps) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e: InputFormEvent) => {
    e.preventDefault();
    updateReport(reportId, age, gender);
    onAgeAndGenderSelected(age, gender);
  };

  return (
    <>
      <p>
        Thank you for submitting, {count} number of people have reported{" "}
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
        ></input>
        <div className="div-gender-select-submit">
          <label htmlFor="gender">Select Gender:</label>
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
          <button className="button--primary w-fit self-center" type="submit">
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FirstChart;
