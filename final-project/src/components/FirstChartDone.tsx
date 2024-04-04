import { PieChart, Pie, ResponsiveContainer, LabelList, Cell } from "recharts";
import { ReportTypeAll } from "../types";

type ChartProps = {
  chartData: ReportTypeAll[];
  nameSideEffect: string | undefined;
};

const FirstChartDone = ({ chartData, nameSideEffect }: ChartProps) => {
  // const COLORS = ["#00C49F", "#00C49F"];
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
          // fill={nameSideEffect}
          fill="#d0006f"
          minAngle={20}
          label={({ name }) => `${name}`}
          style={{
            fontSize: "10px",
            textAlign: "center",
            width: "10%",
          }}
        >
          {formattedData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.name === nameSideEffect ? "#e0be13" : "#d0006f"}
            />
          ))}
          <LabelList
            dataKey="value"
            position="right"
            style={{ fontSize: "10px" }}
          />
          <h1>{nameSideEffect}</h1>
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FirstChartDone;
