import React, {useContext} from 'react';
import Card from '../../components/Card';
import PlanetsContext from '../../context/PlanetsContext';
import AllPlanetsGrid from './GridView/AllPlanetsGrid';
import Table from './TableView/Table';

const AllPlanetsList: React.FC = () => {

  const {viewCtx} = useContext(PlanetsContext);

  return (
    <>
      {viewCtx === 'table'
        ? <Card color="primary"><Table /></Card>
        : <AllPlanetsGrid />
      }
    </>
  );
};

export default AllPlanetsList;