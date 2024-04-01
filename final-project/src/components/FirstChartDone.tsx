import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { ReportTypeAll } from "../types";

type ChartProps = {
  sideEffect?: string | undefined;
  reportCount: number;
  productName: string;
  totalReport: ReportTypeAll[];
};

const FirstChartDone = ({
  // sideEffect,
  // reportCount,
  // productName,
  totalReport,
}: ChartProps) => {
  const formattedData = totalReport.map((count) => ({
    name: count.sideEffectName,
    value: count.amount,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={formattedData}
          // data={[
          //   { name: sideEffect, value: reportCount },
          //   { name: productName, value: totalReport - reportCount },
          // ]}
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
