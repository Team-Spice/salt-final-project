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
      height={300}
    >
      <PieChart>
        <Pie
          className="first-pie-chart "
          data={formattedData}
          isAnimationActive={true}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="70%"
          fill="#d0006f"
          label={({ name, value }) => `${name}: ${value}`}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FirstChartDone;
