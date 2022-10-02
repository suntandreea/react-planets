import React from 'react';
import {useHistory} from 'react-router';
import {Planet} from '../../../types/schema';

interface TableRowProps {
  planet: Planet;
}

const TableRow: React.FC<TableRowProps> = ({planet}) => {
  const history = useHistory();

  return (
    <tr onClick={() => history.push(`/planets/${planet?.id}`)}>
      <td>{planet?.name}</td>
      <td>{planet?.diameter}</td>
      <td>{planet?.climate}</td>
      <td>{planet?.population}</td>
      <td>{planet?.terrain}</td>
    </tr>
  );
};

export default TableRow;