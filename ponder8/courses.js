// javascript objects

const aCouse = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 2,
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 353',
            enrolled: 9,
            days: 'MWF',
            instructor: 'Brother Warner'
        }
    ],
    enrolled: function(sectionNumber) {
        console.log(this.name);
    }
}

console.log(aCouse.name);

aCouse.enrolled(1);

// event listener when the button is pressed
document.querySelector("#enrollStudent").addEventListener("click", (e) => {
    // when pressed, find thesection num they entered
    let sectionNumber = document.querySelector("#sectionNumber").value.trim();
    // increment enrollment of just that section by 1
    aCouse.sections.forEach(section => {
        // is this the section you want to update?
        if(section.sectionNum == sectionNumber) {
            section.enrolled += 1;
        }
    
        console.log(section.sectionNum);
        console.log(section.enrolled);
    });
    // rerender the table with update data
    renderSections(aCourse.sections);   

});

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}