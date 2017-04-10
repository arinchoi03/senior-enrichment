import React from 'react';
import { Link } from 'react-router'

export default function Campuses(props) {

  const campuses = props.campuses
  const setCampus = props.setCampus

  return (
    <div>
      <h2>Campuses</h2>
      <button>
        <span className="glyphicon glyphicon-plus">Add Campus</span>
      </button>
      <ul>
        {campuses.map(
          campus => {
            return (<div className="col-md-4" id='oneCampusDiv'>
                      <Link key={campus.id} to={`/campuses/${campus.id}`} onClick={() => setCampus(campus)}>
                        <span><h3>{campus.name}</h3>
                          <img id="campusPic" className="img-circle" src={campus.imageURL} />
                        </span>
                      </Link>
                      <div>
                        <button className="btn btn-link">
                          <span className="glyphicon glyphicon-remove">REMOVE</span>
                        </button>
                      </div>
                    </div>)
          }
        )}
      </ul>
    </div>
  );
}
