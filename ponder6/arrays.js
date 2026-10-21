let courses = ["WDD131", "CSE212", "WDD231"]

console.log(courses[0]); // WDD131
console.log(courses[3]);

// JavaScript object
let courseAndGPA = {
    courseName: "WDD131",
    courseGPA: 3.7,
    professor: "Brother Warner"
}

console.log(courseAndGPA);
// access variables inside an object
console.log(courseAndGPA.courseName); // WDD131

let coursesAndGPA = [
    {
        courseName: "WDD131",
        courseGPA: 3.7,
        professor: "Brother Warner"
    },
    {
        courseName: "CSE212",
        courseGPA: 3.8,
        professor: "Brother Smith"
    }
]

// looping through an array of objects
for (let i = 0; i < coursesAndGPA.length; i++) {
    console.log(coursesAndGPA[i].courseName);
    console.log(coursesAndGPA[i].courseGPA);
}

// looping through a foreach loop
coursesAndGPA.forEach(item => {
    console.log(item.courseName);
    console.log(item.courseGPA);
});

let body = document.querySelector("body");

// build out HTML dynamically based on array contents

coursesAndGPA.forEach(course => {
    let dynamicHTML = `
        <div>
            <h1>${course.courseName}</h1>
            <h2>${course.courseGPA}</h2>
        </div>
    `;
    body.innerHTML += dynamicHTML;
});