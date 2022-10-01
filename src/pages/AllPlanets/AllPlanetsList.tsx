import React, {useContext} from 'react';
import Card from '../../components/Card';
import PlanetsContext from '../../context/PlanetsContext';
import {View} from '../../types/schema';
import AllPlanetsGrid from './GridView/AllPlanetsGrid';
import AllPlanetsTable from './TableView/AllPlanetsTable';

interface AllPlanetsListProps {
  view: View;
}

const AllPlanetsList: React.FC<AllPlanetsListProps> = ({view}) => {

  const {planetsCtx} = useContext(PlanetsContext);

  return (
    <>
      {view === 'table'
        ? <Card color="primary"><AllPlanetsTable planets={planetsCtx} /></Card>
        : <AllPlanetsGrid />
      }
    </>
  );
};

export default AllPlanetsList;