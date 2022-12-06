// Variables.
const imgList = document.querySelectorAll('img'); // This constant is equal to all the tags with the img class.
let imgPosition = 0; // This is the position of the img, to animate.

// Function to go back in the images list.
function previus() {
    if (imgPosition == 0) return;
        --imgPosition
        move(imgPosition)
}

// Function to go next in the images list.
function next() {
    if (imgPosition == imgList.length -1) return;
        imgPosition++;
        move(imgPosition)
}

// In this function we make the movement.
function move(imgPosition) {
    let translate = imgPosition * -100; // If your animation go right to left is 100 positive.
    imgList.forEach(function(img) {
        img.style.transform = "translateX("+ translate +"%)" // This make the animation.
    })
}

// I hope it works for you :3