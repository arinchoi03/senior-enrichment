import React from 'react';
import { Link } from 'react-router'

export default function Students(props) {

  const students = props.students;
  console.log('students in Students', students)
  const campuses = props.campuses;


    return (<div>
              <h1>Students</h1>
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
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{campuses.map(campus => ((campus.id === student.campusId) ? campus.name : null))}</td>
                    </tr>
                  )}
                </tbody>
              </table>
      </div>)
}
