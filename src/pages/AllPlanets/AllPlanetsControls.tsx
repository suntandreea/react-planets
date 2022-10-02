import {faWindowRestore} from '@fortawesome/free-regular-svg-icons';
import {faTable} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useContext} from 'react';
import Card from '../../components/Card';
import PlanetsContext from '../../context/PlanetsContext';
import {View} from '../../types/schema';

const AllPlanetsControls: React.FC = () => {

  const {viewCtx, changeCurrentView} = useContext(PlanetsContext);

  return (
    <Card color="tertiary" className="switches">

      <div className="view-switch">
        <h2 className="card-title switch-title">View:</h2>
        <div className="switch-btns">
          <input type="radio" id="table"
                 name="view" value="table" checked={viewCtx === 'table'}
                 onChange={(e) => changeCurrentView(e.target.value as View)} />
          <label htmlFor="table">
            <FontAwesomeIcon icon={faTable} />
          </label>

          <input type="radio" id="grid"
                 name="view" value="grid" checked={viewCtx !== 'table'}
                 onChange={(e) => changeCurrentView(e.target.value as View)} />
          <label htmlFor="grid">
            <FontAwesomeIcon icon={faWindowRestore} />
          </label>
        </div>
      </div>

    </Card>
  );
};

export default AllPlanetsControls;