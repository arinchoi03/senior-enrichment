import React, { Component } from 'react'
import Students from './Students'

const Campus = (props) => {
  // const students = props.students;
  // const campus = props.campus;
  const selectedCampus = props.selectedCampus;
  console.log('students in one campus', props.students)

  return (
    <div>
      <h1>{selectedCampus.name}</h1>
        <Students students={props.students} campuses={props.campuses} />
    </div>
  )
}

export default Campus;

// Campus component receives list of filtered students by selectedcampus
// passes on list of filtered students to Students page (same table format)
