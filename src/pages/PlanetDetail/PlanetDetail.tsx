import React from 'react';
import {Planet} from '../../types/schema';

interface PlanetDetailProps {
  planet: Planet;
}

const PlanetDetail: React.FC<PlanetDetailProps> = ({planet}) => {

  return (
    <>
      <h1>Planet Detail</h1>
    </>
  );
};

export default PlanetDetail;