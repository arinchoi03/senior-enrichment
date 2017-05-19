# Sailor Interplanetary Academy of Javascript

## Senior Enrichment Project

This project was presented to Grace Hopper 1702 students so students could add optional 25 points on the senior checkpoints.

I completed this senior enrichment project and refactored part of the code (Campuses) to use Immutable.js.

## Requirements

### The Premise

You are the CTO of the Margaret Hamilton Interplanetary Academy of JavaScript. Create a RESTful web platform that allows you to manage your students and campuses.

### The tools

Use at least sequelize, express, react, and redux when creating this app. You can incorporate any additional libraries or tools you wish.

### DB Design

- Students
  * x have profile info (e.g. name and email)
  * x must be assigned to a campus

- Campuses
  * x have info such as a name and image
  * x can have many students assigned (may have none)

### Views and Functionality
#### See Wireframes folder for visual

- Navigation: as a user I...
  * x will land on **Home** by default
  * x can navigate to **Campuses** from **Home**
  * x can navigate to **Students** from **Home**
  * x can navigate to view a **Single Campus** from **Campuses**
  * x can navigate to view a **Single Student** from **Students**
  * x can navigate to view a **Single Student** from **Campuses** (for any student at that campus)
  * x can navigate to view that student's **Single Campus** from **Single Student**

- Views: as a user I...
  * x see a list of all campuses on the **Campuses** view
  * x see a list of all students on the **Students** view
  * x see details about a campus on the **Single Campus** view, including that campus's students
  * x see details about a student on the **Single Student** view, including that student's campus

- Actions: as a user I...
  * x can create a campus - issue: when campus created, it gets added to students list??
  * x can edit a campus's info, including adding/removing a student to/from that campus
  * x can delete a campus
  * x can create a student
  * x can edit a student's info, including the campus that student is assigned to
  * x can delete a student

### Routes

```
GET
x all campuses
x a campus by id
x all students
x a student by id
```

```
POST
x new campus
x new student
```

```
PUT
x updated student info for one student
x updated campus info for one campus
```

```
DELETE
x a campus
x a student
```
