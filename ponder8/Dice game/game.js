// add event listener to the button
document.querySelector("#rollButton").addEventListener("click", event => {
    // animate the die
    const images = document.querySelectorAll("#gameboard img");
    images.forEach(image => {
        // Switch source to die rolling animlation
        image.src = "assets/die_rolling.gif";
    })
    
    // change value each die lands on randomly
        // change the src image

    setTimeout(() => {
        // run what is in here for x milliseconds
        images.forEach(image => {
            if (isDieUnlocked(image)) {
                const randomNumber = Math.floor((Math.random() * 6) + 1);
                image.src = `assets/white_dice_${randomNumber}.gif`;
                // set the images to a random die
                // Math.random() returns a random number 0 - 1
            }
        });
    }, 500);
});

function isDieUnlocked(dieImage) {
    // is the corrisponding checkbox checked?
    const checkboxes = document.querySelectorAll("#gameboard input");
    // return a new array of just the checked ones
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}