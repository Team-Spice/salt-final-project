import React, { useEffect, useState } from "react";
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
};

const MainChart = ({ productId, selectedAgeFromApp }: MainChartProps) => {
  const [selectedAge, setSelectedAge] = useState<number>(0);
  const [chartData, setChartData] = useState<ReportChartDTO[]>([]);

  useEffect(() => {
    const getData = async () => {
      console.log("selected age:", selectedAgeFromApp);
      const age = parseInt(selectedAgeFromApp);
      setSelectedAge(age);
      await fetchDemographicData(age);
    };
    getData();
  }, [selectedAgeFromApp]);

  const fetchDemographicData = async (age: number | null) => {
    try {
      let newData: ReportChartDTO[] = [];
      if (age !== null) {
        newData = await getDemographicChartData(productId, age);
      } else {
        newData = await Promise.all(
          Array.from({ length: 120 }, (_, age) =>
            getDemographicChartData(productId, age)
          )
        ).then((ageData) => ageData.flat());
      }
      setChartData(newData);
    } catch (error) {
      console.error("Error fetchingg:", error);
    }
  };

  const handleAgeChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const age = event.target.value !== "" ? parseInt(event.target.value) : -1;
    if (age < 0) {
      return;
    }
    setSelectedAge(age);
    await fetchDemographicData(age);
  };

  if (!selectedAge) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Main Chart</h2>
      <div>
        <label htmlFor="age">Select Age:</label>
        <select id="age" onChange={handleAgeChange} value={selectedAge ?? ""}>
          <option value="">-- Select age --</option>
          {Array.from({ length: 120 }, (_, age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
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
