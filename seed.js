// tried to get seed file to work... use below data if you want to see the pictures :)

// const Promise = require('bluebird');
// const db = require('./db');
// const Campus = require('./db/models/').Campus;
// const Student = require('./db/models/').Student;

// const data = {
//   campus: [
//     {name: "Moon", imageURL: "https://s-media-cache-ak0.pinimg.com/736x/fa/ae/a5/faaea50a105a67328be40b04c649d471.jpg"},
//     {name: "Venus", imageURL: "https://s-media-cache-ak0.pinimg.com/736x/f9/44/ea/f944eae109084d6fa457739443c05594.jpg"},
//     {name: "Mercury", imageURL: "https://s-media-cache-ak0.pinimg.com/736x/10/9a/92/109a92cbe0a605fcf19cd6f3bf6daed5.jpg"},
//     {name: "Mars", imageURL: "https://static2.comicvine.com/uploads/scale_small/1/13820/2107614-imagen_2.png"},
//     {name: "Jupiter", imageURL: "https://s-media-cache-ak0.pinimg.com/736x/f9/44/ea/f944eae109084d6fa457739443c05594.jpg"}
//   ],
//   student: [
//     {name: "Arin", email: 'arin@gmail.com'},
//     {name: "Yera", email: 'yera@gmail.com'},
//     {name: "Tanya", email: 'tmack@hotmail.com'},
//     {name: "Devora", email: 'dgg@gmail.com'},
//     {name: "Michelle", email: 'mhoff@netmail.com'},
//     {name: "Claude", email: 'claude@gmail.com'},
//     {name: "Steven", email: 'steveH@hotmail.com'},
//     {name: "James", email: 'jguo@gmail.com'},
//     {name: "Jbo", email: 'jbo@gmail.com'}
//   ]
// };

// db.sync({force: true})
// .then(function () {
//   console.log("Dropped old data, now inserting data");
//   const creatingCampuses = data.campus.map(function (campus) {
//     return Campus.create(campus);
//   });
//   const creatingStudents = data.student.map(function (student) {
//     return Student.create(student);
//   });
//   return Promise.all([creatingCampuses, creatingStudents]);
// })
// .then(function () {
//   console.log("Finished inserting data (press ctrl-c to exit)");
// })
// .catch(function (err) {
//   console.error('There was totally a problem', err, err.stack);
// });
