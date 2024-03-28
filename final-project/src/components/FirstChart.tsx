import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { updateReport } from "../api";
import FirstChartDone from "./Charts";

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
  totalReport: number;
};

const FirstChart = ({
  productName,
  sideEffectName,
  count,
  reportId,
  totalReport,
}: FirstChartProps) => {
  const navigate = useNavigate();

  const [age, setAge] = useState<string>("");

  const handleSubmit = (e: InputFormEvent) => {
    e.preventDefault();
    updateReport(reportId, age);
    navigate("/MainChart");
    // setAge(e.target.formAge.value);
    console.log(age);
  };
  return (
    <>
      <p>
        Thank you for submitting, {count} number of people have reported{" "}
        {sideEffectName} as a side effect for {productName}!
      </p>
      <p>INSERT CHART HERE</p>
      <FirstChartDone
        sideEffect={sideEffectName}
        reportCount={parseInt(count || "0")}
        productName={productName ?? ""}
        totalReport={totalReport}
      />
      <p>Want to see more?</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="formAge">Age</label>
        <input
          value={age}
          onChange={(a) => setAge(a.target.value)}
          type="number"
        ></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default FirstChart;
