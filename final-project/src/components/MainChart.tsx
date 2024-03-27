import { Link } from "react-router-dom";
import { SideEffects } from "../types";

const MainChart = ( { chartData }: { chartData: SideEffects } ) => {

  const { medicament, sideEffectList } = chartData;

  return (
    <>
    <p>Side effects for {medicament}</p>
      {sideEffectList.map(({name}) => <p key={name}>{name}, people</p>)}
      <Link to="/">
        <button>Report another side effect</button>
      </Link>
    </>
  );
};

export default MainChart;
