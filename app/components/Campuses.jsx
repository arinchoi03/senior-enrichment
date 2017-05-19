import React from 'react';
import { Link } from 'react-router'
import Immutable from 'immutable'

export default function Campuses(props) {
  const campuses = props.campuses;
  const setCampus = props.setCampus;
  const deleteCampus = props.deleteCampus;
  console.log('campuses without toJS', campuses)
  return (
    <div>
      <h2>Campuses</h2>
      <button>
        <Link to='/new-campus'>
        <span className="glyphicon glyphicon-plus">Add Campus</span>
        </Link>
      </button>
      <ul>
      {
        campuses.map(campus => (
          <div key={campus.get('id')} className="col-md-4" id='oneCampusDiv'>
            <Link to={`/campuses/${campus.get('id')}`} onClick={() => setCampus(campus)}>
              <span><h3>{campus.get('name')}</h3>
                <img id="campusPic" className="img-circle" src={campus.get('imageURL')} />
              </span>
                      </Link>
                      <div>
                        <button
                        className="btn btn-link"
                        onClick={(e) => {
                          e.preventDefault()
                          deleteCampus(campus)}
                        }>
                          <span id="campusBtn" className="glyphicon glyphicon-remove">REMOVE</span>
                        </button>
                        <button
                          className="btn btn-link btn-sm"
                          data={campus.get('id')}
                          onClick={() => setCampus(campus)}>
                          <Link to={`/edit-campus/${campus.get('id')}`}>
                          <span id="campusBtn" className="glyphicon glyphicon-pencil">EDIT</span>
                          </Link>
                        </button>
                      </div>
            </div>
          )
        )
      }
      </ul>
    </div>
  );
}
