import React, {useContext, useEffect, useState} from 'react';
import PlanetsContext from '../../../context/PlanetsContext';
import {Pagination, Planet, Results, SortCriteria} from '../../../types/schema';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';

const Table: React.FC = () => {

  const {planetsCtx, sizeCtx, pageCtx, sortCtx, changeCurrentSize, changeCurrentPage} = useContext(PlanetsContext);

  const [paginatedData, setPaginatedData] = useState<Pagination[]>([]);

  const headers = ['name', 'diameter', 'climate', 'population', 'terrain'];

  const processByResults = (size: Results): Pagination[] => {
    if (!size || !planetsCtx || !planetsCtx.length) return [];
    let pagination = [];
    if (size === 'all') {
      pagination.push({page: 1, content: planetsCtx});
    } else {
      const pages = planetsCtx.length / +size;
      for (let i = 0; i < pages; i++) {
        pagination.push({page: i + 1, content: planetsCtx.slice(+size * i, +size * (i + 1))});
      }
    }
    return pagination;
  };

  const processBySortCriteria = (sortCriteria: SortCriteria, planetsList: Planet[]): Planet[] => {
    if (!sortCriteria || !planetsList || !planetsList.length) return [];
    const field = sortCriteria.field;
    const dir = sortCriteria.direction;
    if (field === 'off') {
      return planetsList;
    }
    if (field === ('diameter' || 'population')) {
      if (dir === 'up') {
        return [...planetsList].sort((a, b) => {
          if (isNaN(parseInt(a[field])) || isNaN(parseInt(b[field]))) {
            return a[field] > b[field] ? 1 : -1;
          } else {
            return +a[field] - +b[field];
          }
        });
      } else {
        return [...planetsList].sort((a, b) => {
          if (isNaN(parseInt(a[field])) || isNaN(parseInt(b[field]))) {
            return a[field] > b[field] ? -1 : 1;
          } else {
            return +b[field] - +a[field];
          }
        });
      }
    } else {
      if (dir === 'up') {
        return [...planetsList].sort((a, b) => a[field] > b[field] ? 1 : -1);
      } else {
        return [...planetsList].sort((a, b) => a[field] > b[field] ? -1 : 1);
      }
    }
  };

  useEffect(() => {
    setPaginatedData(processByResults(sizeCtx));
  }, [sizeCtx]);

  const paginatedPlanets = paginatedData[pageCtx - 1]?.content;
  const sortedPlanets = processBySortCriteria(sortCtx, paginatedPlanets);
  const processedPlanets = sortedPlanets;

  return (
    <table className="table">
      <thead className="card-title">
      <tr>
        {headers.map((item, idx) => <TableHeaderCell key={idx} name={item} />)}
      </tr>
      </thead>
      <tbody>
      {processedPlanets?.map(planet => <TableRow key={planet?.id} planet={planet} />)}
      </tbody>
      <tfoot>
      <tr>
        <td>Results size:</td>
        <td>
          <select name="results-size" defaultValue={sizeCtx}
                  onChange={(e) => changeCurrentSize(e.target.value as Results)}>
            <option value="10">10</option>
            <option value="30">30</option>
            <option value="all">All</option>
          </select>
        </td>
        <td colSpan={2} className="pagination">
          {paginatedData?.length > 1 && paginatedData?.map(
            data => <span key={data.page}
                          className={`page-no ${pageCtx === data.page ? 'active' : ''}`}
                          onClick={() => changeCurrentPage(data.page)}>{data.page}</span>)}
        </td>
        <td>Showing {processedPlanets?.length} of {planetsCtx?.length} results</td>
      </tr>
      </tfoot>
    </table>
  );
};

export default Table;