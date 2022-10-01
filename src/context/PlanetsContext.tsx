import React, {createContext, useState} from 'react';
import {Planet} from '../types/schema';

interface PlanetsContext {
  planetsCtx: Planet[];
  addNewPlanetsBatch: (data: Planet[]) => void;
}

const PlanetsContext = createContext<PlanetsContext>({
  planetsCtx: [],
  addNewPlanetsBatch: () => {
  }
});

export const PlanetsProvider: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {

  const [planetsCtx, setPlanetsCtx] = useState<Planet[]>([]);

  const addNewPlanetsBatch = (data: Planet[]) => {
    if (!planetsCtx.includes(data[0])) {
      const planetsBatch = data.map(planet => {
        const planetId = planet.url.slice(30, -1);
        return {...planet, id: +planetId}
      });
      setPlanetsCtx(prevState => [...prevState, ...planetsBatch]);
    }
  };

  const contextValue: PlanetsContext = {
    planetsCtx,
    addNewPlanetsBatch
  };

  return (
    <PlanetsContext.Provider value={contextValue}>{children}</PlanetsContext.Provider>
  );
};

export default PlanetsContext;