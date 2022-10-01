import React from 'react';
import {Planet} from '../../../types/schema';
import AllPlanetsTableRow from './AllPlanetsTableRow';

interface AllPlanetsTableProps {
  planets: Planet[];
}

const AllPlanetsTable: React.FC<AllPlanetsTableProps> = ({planets}) => {

  return (
    <table className="table">
      <thead className="card-title">
      <tr>
        <th>Name</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Population</th>
        <th colSpan={2}>Terrain</th>
      </tr>
      </thead>
      <tbody>
      {planets?.map((planet, idx) => <AllPlanetsTableRow key={planet?.id || idx} planet={planet} />)}
      </tbody>
    </table>
  );
};

export default AllPlanetsTable;