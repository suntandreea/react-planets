import React from 'react';
import {Field} from '../../../types/schema';

interface TableHeaderFilterProps {
  name: Field;
}

const TableHeaderFilter: React.FC<TableHeaderFilterProps> = ({name}) => {

  return (
    <div>
      Filter
    </div>
  );
 };

export default TableHeaderFilter;