import React from 'react';
import { Link } from 'react-router'

export default function Students(props) {

  const students = props.students;
  console.log('students in Students comp', students)
    return (<div>
              <h1>In Students</h1>
        {/*table of students and their campus*/}
        {/* new student button & link to page 'New-Student' & delete button*/}
      </div>)
}
