import React, {useContext, useEffect, useState} from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import {PlanetsResponse, Results, View} from '../../types/schema';
import AllPlanetsControls from './AllPlanetsControls';
import AllPlanetsList from './AllPlanetsList';

const AllPlanets: React.FC = () => {
  const {planetsCtx, addNewPlanetsBatch} = useContext(PlanetsContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getAllPlanets = async () => {
    setIsLoading(true);
    try {
      const data: PlanetsResponse = await fetch('https://swapi.dev/api/planets/')
      .then((response) => {
        if (response?.status !== 200) {
          throw `${response.status} - ${response.statusText}`;
        } else {
          return response.json();
        }
      });
      addNewPlanetsBatch(data?.results);
      const pagesNr = data?.count / data?.results?.length;

      for (let i = 2; i <= pagesNr; i++) {
        const data: PlanetsResponse = await fetch(`https://swapi.dev/api/planets/?page=${i}`)
        .then((response) => {
          if (response?.status !== 200) {
            throw `${response.status} - ${response.statusText}`;
          } else {
            return response.json();
          }
        });
        addNewPlanetsBatch(data?.results);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err as string);
    }
  };

  useEffect(() => {
    setError('');
    if (!planetsCtx.length) {
      getAllPlanets();
    }
  }, []);

  return (
    <main className="planets-page">
      <h1>All Planets</h1>

      {isLoading
        ? <p>Loading data ...</p>
        : error
          ? <p>{error}</p>
          : <>
            <AllPlanetsControls />
            <AllPlanetsList />
          </>
      }
    </main>
  );
};

export default AllPlanets;