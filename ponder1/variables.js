
// declare variable
let age = 23;

// print to console
console.log(age);

// constant variable
const name = "Brother Warner";

// read only
const username = "billybob";

// Scope = where you can reference a variable by name

if(age == 22) {
    // New Scope
    // Can reference a higher scope
    console.log(username)
    let favoritecolor = "blue";
}

// Doesn't work. Can't reference something in a lower scope on its own
console.log(favoritecolor);