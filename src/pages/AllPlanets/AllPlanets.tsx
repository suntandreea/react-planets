import React, {useContext, useEffect, useState} from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import {PlanetsResponse, View} from '../../types/schema';
import AllPlanetsList from './AllPlanetsList';
import AllPlanetsViewSwitch from './AllPlanetsViewSwitch';

const AllPlanets: React.FC = () => {
  const {addNewPlanetsBatch} = useContext(PlanetsContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [view, setView] = useState<View>('table');

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
    getAllPlanets();
  }, []);

  return (
    <main>
      <h1>All Planets</h1>

      {isLoading
        ? <p>Loading data ...</p>
        : error
          ? <p>{error}</p>
          : <>
            <AllPlanetsViewSwitch view={view} setView={setView}/>
            <AllPlanetsList view={view} />
          </>
      }
    </main>
  );
};

export default AllPlanets;