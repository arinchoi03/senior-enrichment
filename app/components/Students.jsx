import React from 'react';
import { Link } from 'react-router'

export default function Students(props) {

  const students = props.students;
  const campuses = props.campuses;
  const setStudent = props.setStudent;
  const setCampus = props.setCampus;

    return (<div>
              <h2>Students</h2>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Campus</th>
                  </tr>
                </thead>
                <tbody>
                  {students && students.map(
                    student => <tr key={student.id}>
                    <td><Link to={`/students/${student.id}`} onClick={() => setStudent(student)}>{student.name}</Link></td>
                    <td>{student.email}</td>
                    <td><Link to={`/campuses/${student.campusId}`} onClick={() => setCampus(student.campusId)}>{campuses.map(campus => ((campus.id === student.campusId) ? campus.name : null))}</Link>
                    </td>
                    </tr>
                  )}
                </tbody>
              </table>
      </div>)
}

// getting error to add unique key here when navigating to single student page..
