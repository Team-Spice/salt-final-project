import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { getChartDataByAgeRange } from "../api";
import { ReportChartDTO } from "../types";
import { useNavigate } from "react-router-dom";
import { ageGroup } from "../constants";
import Button from "./Button";

type MainChartProps = {
  productId: number;
  selectedAgeGroup: string;
  selectedGenderFromApp: string;
};

const MainChart = ({
  productId,
  selectedAgeGroup = "-",
  selectedGenderFromApp = "",
}: MainChartProps) => {
  const [selectedAge, setSelectedAge] = useState(selectedAgeGroup);
  const [selectedGender, setSelectedGender] = useState(selectedGenderFromApp);
  const [chartData, setChartData] = useState<ReportChartDTO[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      await fetchDemographicData(selectedAge, selectedGender);
    };
    getData();
  }, [selectedAge, selectedGender]);

  const fetchDemographicData = async (age: string, gender: string) => {
    try {
      const newData: ReportChartDTO[] = await getChartDataByAgeRange(
        productId,
        age,
        gender
      );

      newData.length === 0
        ? setErrorMessage("No data available")
        : setErrorMessage("");
      setChartData(newData);
    } catch (error) {
      console.error("Error fetchingg:", error);
    }
  };

  const onNavigateClick = () => {
    navigate("/");
  };

  if (productId === 0) {
    navigate("/");
  }

  return (
    <div className="div-main-chart flex flex-col">
      <h2 className="h2-main-chart mb-6 text-2xl">Demographic Chart</h2>
      <div className="div-select-age flex flex-col">
        <label htmlFor="age">Select Age</label>
        <select
          id="age"
          onChange={(e) => setSelectedAge(e.target.value)}
          value={selectedAge}
        >
          <option value="-">-- Select age --</option>
          {ageGroup.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </div>
      <div className="div-select-gender flex flex-col">
        <label htmlFor="gender">Select gender at birth</label>
        <select
          id="gender"
          onChange={(e) => setSelectedGender(e.target.value)}
          value={selectedGender}
        >
          <option value="">-- Select gender at birth --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {errorMessage && (
        <div className="form__error-message"> {errorMessage}</div>
      )}
      {!errorMessage && (
        <ResponsiveContainer
          className="container-main-chart h-96 mt-6 self-center"
          width="100%"
          height={330}
        >
          <BarChart
            data={chartData}
            margin={{ top: 15, right: 2, left: -20, bottom: 5 }}
            barCategoryGap={3}
            barSize={60}
          >
            <XAxis tick={false}></XAxis>

            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" name="Amount of Reports" fill="#d0006f">
              <LabelList
                dataKey="sideEffectName"
                position="bottom"
                style={{
                  fontSize: "10px",
                  textAlign: "center",
                  width: "50%",
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
      <Button onClick={onNavigateClick} text="New report" />
    </div>
  );
};

export default MainChart;
