import React, {createContext, useState} from 'react';
import {Planet, Results, SortCriteria, Field, View, FilterCriteria} from '../types/schema';

interface PlanetsContext {
  planetsCtx: Planet[];
  viewCtx: View;
  sizeCtx: Results;
  pageCtx: number;
  sortCtx: SortCriteria;
  filterCtx: FilterCriteria;
  addNewPlanetsBatch: (data: Planet[]) => void;
  changeCurrentView: (data: View) => void;
  changeCurrentSize: (data: Results) => void;
  changeCurrentPage: (data: number) => void;
  changeSortCriteria: (data: Field) => void;
  changeFilterCriteria: (data: FilterCriteria) => void;
}

const defaultSort: SortCriteria = {
  field: 'off',
  direction: 'off'
};

const defaultFilter: FilterCriteria = {
  field: 'off'
};

const PlanetsContext = createContext<PlanetsContext>({
  planetsCtx: [],
  viewCtx: 'table',
  sizeCtx: '10',
  pageCtx: 1,
  sortCtx: defaultSort,
  filterCtx: defaultFilter,
  addNewPlanetsBatch: () => {
  },
  changeCurrentView: () => {
  },
  changeCurrentSize: () => {
  },
  changeCurrentPage: () => {
  },
  changeSortCriteria: () => {
  },
  changeFilterCriteria: () => {
  }
});

export const PlanetsProvider: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {

  const [planetsCtx, setPlanetsCtx] = useState<Planet[]>([]);
  const [viewCtx, setViewCtx] = useState<View>('table');
  const [sizeCtx, setSizeCtx] = useState<Results>('10');
  const [pageCtx, setPageCtx] = useState<number>(1);
  const [sortCtx, setSortCtx] = useState<SortCriteria>(defaultSort);
  const [filterCtx, setFilterCtx] = useState<FilterCriteria>(defaultFilter);

  const addNewPlanetsBatch = (data: Planet[]) => {
    const planetsBatch = data.map(planet => {
      const planetId = planet.url.slice(30, -1);
      return {...planet, id: +planetId}
    });
    setPlanetsCtx(prevState => [...prevState, ...planetsBatch]);
  };

  const changeCurrentView = (data: View) => {
    setViewCtx(data);
  };

  const changeCurrentSize = (data: Results) => {
    setSizeCtx(data);
    setPageCtx(1);
    setSortCtx(defaultSort);
    setFilterCtx(defaultFilter);
  };

  const changeCurrentPage = (data: number) => {
    setPageCtx(data);
  };

  const changeSortCriteria = (data: Field) => {
    setSortCtx(prevState => {
      let newSort: SortCriteria;
      if (prevState.field === data) {
        if (prevState.direction === 'off') {
          newSort = {
            field: data,
            direction: 'up'
          }
        } else if (prevState.direction === 'up') {
          newSort = {
            field: data,
            direction: 'down'
          };
        } else {
          newSort = defaultSort;
        }
      } else {
        newSort = {
          field: data,
          direction: 'up'
        }
      }
      return newSort;
    });
  };

  const changeFilterCriteria = (data: FilterCriteria) => {

  };

  const contextValue: PlanetsContext = {
    planetsCtx,
    viewCtx,
    sizeCtx,
    pageCtx,
    sortCtx,
    filterCtx,
    addNewPlanetsBatch,
    changeCurrentView,
    changeCurrentSize,
    changeCurrentPage,
    changeSortCriteria,
    changeFilterCriteria
  };

  return (
    <PlanetsContext.Provider value={contextValue}>{children}</PlanetsContext.Provider>
  );
};

export default PlanetsContext;