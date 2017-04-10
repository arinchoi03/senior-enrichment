import React from 'react';
import { Link } from 'react-router'

export default function Campuses(props) {

  const campuses = props.campuses
  const setCampus = props.setCampus

  return (
    <div>
      <h2>Campuses</h2>
      <btn>
        <span className="glyphicon glyphicon-plus">Add Campus</span>
      </btn>
      <ul>
        {campuses.map(
          campus => {
            return (<div className="col-md-4">
                      <Link key={campus.id} to={`/campuses/${campus.id}`} onClick={() => setCampus(campus)}>
                        <span id="oneCampusDiv" className=".col-xs-6 .col-md-4"><h3>{campus.name}</h3>
                          <img id="campusPic" src={campus.imageURL} />
                        </span>
                      </Link>
                      <div>
                        <btn>
                          <span className="glyphicon glyphicon-remove">REMOVE</span>
                        </btn>
                      </div>
                    </div>)
          }
        )}
      </ul>
    </div>
  );
}
