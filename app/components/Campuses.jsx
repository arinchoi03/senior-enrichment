import React from 'react';
import { Link } from 'react-router'

export default function Campuses(props) {

const campuses = props.campuses

  return (
    <div>
      <h1>Campuses</h1>
        <ul>
        {campuses.map(
          campus => {
            return (<Link key = {campus.id} to = {`api/campus/${campus.id}`}>
                      <div id="oneCampusDiv">
                        {campus.name}
                      </div>
                    </Link>)
          }
        )}
        </ul>
    </div>
    );

}
