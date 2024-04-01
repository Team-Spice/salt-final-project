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

  const fetchDemographicData = async (
    age: string,
    gender: string
  ) => {
    try {
      console.log("fetching, age:",age,"gender:",gender);

      let newData: ReportChartDTO[] = [];
        newData = await getDemographicChartData(productId, age, gender);
      setChartData(newData);
    } catch (error) {
      console.error("Error fetchingg:", error);
    }
  };

  return (
    <div>
      <h2>Main Chart</h2>
      <div>
        <label htmlFor="age">Select Age:</label>
        <select id="age" onChange={(e) => setSelectedAge(e.target.value)} value={selectedAge}>
          <option value="">-- Select age --</option>
          {Array.from({ length: 120 }, (_, age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </div>{" "}
      <div>
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
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="sideEffectName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MainChart;
