import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { ReportTypeAll } from "../types";

type ChartProps = {
  chartData: ReportTypeAll[];
};

const FirstChartDone = ({
  chartData,
}: ChartProps) => {
  const formattedData = chartData.map((count) => ({
    name: count.sideEffectName,
    value: count.amount,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={formattedData}
          isAnimationActive={false}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FirstChartDone;
