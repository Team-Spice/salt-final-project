import { PieChart, Pie, ResponsiveContainer, LabelList } from "recharts";
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
          outerRadius="47%"
          fill="#d0006f"
          minAngle={20}
          label={({ name }) => `${name}`}
          style={{
            fontSize: "10px",
            textAlign: "center",
            width: "10%",
          }}
        >
          <LabelList
            dataKey="value"
            position="right"
            style={{ fontSize: "10px" }}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FirstChartDone;
