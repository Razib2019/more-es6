const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}
// Using Dot Notation
/* const marks = student.marks;
const math = student.marks.math;
console.log(math); */

// Using Bracket Notation
/* const chemistry = student['marks']['chemistry'];
console.log(chemistry); */

/* const chemistry = student['marks']['chemistry'];
console.log(chemistry); */

const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);