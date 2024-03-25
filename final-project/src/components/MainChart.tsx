import { Link } from "react-router-dom";
import { SideEffects } from "../types";

const MainChart = ( { chartData }: { chartData: SideEffects } ) => {

  const { medicament, sideEffects } = chartData;

  return (
    <>
    <p>Side effects for {medicament}</p>
      {sideEffects.map(({name, amount}) => <p key={name}>{name}, {amount} people</p>)}
      <Link to="/">
        <button>Report another side effect</button>
      </Link>
    </>
  );
};

export default MainChart;
