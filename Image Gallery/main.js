const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgLinks = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
/* Looping through images */
for (let i = 0; i < imgLinks.length; i++) {
    
    const newImage = document.createElement("img");
    newImage.setAttribute("src", imgLinks[i]);
    thumbBar.appendChild(newImage);
}
thumbBar.addEventListener('click', (e) => {
    displayedImage.sty.src = e
});

/* Wiring up the Darken/Lighten button */
