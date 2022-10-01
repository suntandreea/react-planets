import React from 'react';
import {View} from '../../types/schema';

interface AllPlanetsViewSwitchProps {
  view: View;
  setView: (value: View) => void;
}

const AllPlanetsViewSwitch: React.FC<AllPlanetsViewSwitchProps> = ({view, setView}) => {

  return (
    <div>
      <input type="radio" id="table"
             name="view" value="table" checked={view === 'table'}
             onChange={(e) => setView(e.target.value as View)} />
      <label htmlFor="table">Table</label>

      <input type="radio" id="grid"
             name="view" value="grid" checked={view !== 'table'}
             onChange={(e) => setView(e.target.value as View)} />
      <label htmlFor="grid">Grid</label>
    </div>
  );
};

export default AllPlanetsViewSwitch;