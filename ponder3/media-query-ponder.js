// grab the menu button html button and save to a variable
let menuButton = document.querySelector('.menu-btn');

// add event listener to menuButton
// anonymous or nameless function
menuButton.addEventListener("click", function (e) {
    // grab a reference to the nav
    let navLinks = document.querySelector('nav');
    // toggle menu styles when clicked
    if (navLinks.style.display === '') {
        navLinks.style.display = 'flex';
    }
});