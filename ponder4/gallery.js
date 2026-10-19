// 1. Pull from DOM
let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImage = dialog.querySelector('img');
const closeButton = dialog.querySelector('.close-viewer');

// 2. Add event listener
gallery.addEventListener("click", function(event) {
    console.log(event); 
    // swap out src of dialog image
    dialogImage.src = event.target.src.replace('-sm', '-full');

    // show dialog box
    dialog.showModal();
});

// Close modal on button click
closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});