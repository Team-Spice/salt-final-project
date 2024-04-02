import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { ReportTypeAll } from "../types";

type ChartProps = {
  chartData: ReportTypeAll[];
};

const FirstChartDone = ({ chartData }: ChartProps) => {
  const formattedData = chartData.map((count) => ({
    name: count.sideEffectName,
    value: count.amount,
  }));

  return (
    <ResponsiveContainer
      className="container-first-chart "
      width="100%"
      height={200}
    >
      <PieChart>
        <Pie
          className="first-pie-chart sm"
          data={formattedData}
          isAnimationActive={false}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="40%"
          outerRadius="50%"
          fill="#d0006f"
          label={({ name, value }) => `${name}: ${value}`}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FirstChartDone;
