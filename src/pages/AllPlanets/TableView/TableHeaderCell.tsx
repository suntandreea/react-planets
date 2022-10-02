import {faSort, faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useContext} from 'react';
import PlanetsContext from '../../../context/PlanetsContext';
import {Field} from '../../../types/schema';
import TableHeaderFilter from './TableHeaderFilter';

interface TableHeaderCellProps {
  name: string;
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({name}) => {

  const {sortCtx, changeSortCriteria} = useContext(PlanetsContext);

  let sortIcon;
  if (name === sortCtx?.field) {
    switch (sortCtx.direction) {
      case 'up':
        sortIcon = faSortUp;
        break;
      case 'down':
        sortIcon = faSortDown;
        break;
      case 'off':
        sortIcon = faSort;
        break;
    }
  } else {
    sortIcon = faSort;
  }

  return (
    <th onClick={() => changeSortCriteria(name as Field)}>
      {name}
      <FontAwesomeIcon icon={sortIcon}/>
      <TableHeaderFilter name={name as Field} />
    </th>
  );
};

export default TableHeaderCell;