import React, { Component } from 'react'
import Students from './Students'

//dumb component to render 'Home page' not sure we need this at all..

const Student = (props) => {

  // passing just this one selected student as students (in array format for 'map' func)
  const students = [props.selectedStudent]
  const campuses = props.campuses;
  const setStudent = props.setStudent;

  // reusing the Students component
  return (
    <Students students={students} campuses={campuses} setStudent={setStudent} />
  )
}

export default Student;
