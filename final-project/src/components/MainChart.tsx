import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getDemographicChartData } from "../api";
import { ReportChartDTO } from "../types";
import { Link } from "react-router-dom";

type MainChartProps = {
  productId: number;
  selectedAgeFromApp: string;
  selectedGenderFromApp: string;
};

const MainChart = ({
  productId,
  selectedAgeFromApp = "",
  selectedGenderFromApp = "",
}: MainChartProps) => {
  const [selectedAge, setSelectedAge] = useState(selectedAgeFromApp);
  const [selectedGender, setSelectedGender] = useState(selectedGenderFromApp);
  const [chartData, setChartData] = useState<ReportChartDTO[]>([]);

  useEffect(() => {
    const getData = async () => {
      console.log("selected age:", selectedAge);
      await fetchDemographicData(selectedAge, selectedGender);
    };
    if (selectedAge || selectedGender) {
      getData();
    }
  }, [selectedAge, selectedGender]);

  const fetchDemographicData = async (age: string, gender: string) => {
    try {
      console.log("fetching, age:", age, "gender:", gender);

      let newData: ReportChartDTO[] = [];
      newData = await getDemographicChartData(productId, age, gender);
      setChartData(newData);
    } catch (error) {
      console.error("Error fetchingg:", error);
    }
  };

  return (
    <div className="div-main-chart flex flex-col">
      <h2 className="h2-main-chart mb-6 text-2xl">Main Chart</h2>
      <div className="div-select-age flex flex-col">
        <label htmlFor="age">Select Age:</label>
        <select
          id="age"
          onChange={(e) => setSelectedAge(e.target.value)}
          value={selectedAge}
        >
          <option value="">-- Select age --</option>
          {Array.from({ length: 120 }, (_, age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </div>{" "}
      <div className="div-select-gender flex flex-col">
        <label htmlFor="gender">Select Gender:</label>
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
      <ResponsiveContainer
        className="container-main-chart h-96 mt-6 self-center"
        width="80%"
        height={350}
      >
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barCategoryGap={3}
          barSize={70}
        >
          <XAxis dataKey="sideEffectName" />

          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#d0006f" />
        </BarChart>
      </ResponsiveContainer>
      <Link to={"/"}>
        <button className="button-report-new button--primary ">
          Report a new medicament
        </button>
      </Link>
    </div>
  );
};

export default MainChart;
