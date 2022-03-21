const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
//const imgLinks = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
const imgLinks = [`pic1.jpg`, `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
/* Looping through images */
for (let i = 0; i < imgLinks.length; i++) {
    
    const newImage = document.createElement("img");
    newImage.setAttribute("src", `images/${imgLinks[i]}`);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', (e) => {
    //displayedImage.setAttribute("src", imgLinks[i]);
    displayedImage.src = e.target.src;
});
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    let cla = btn.getAttribute('class');
    if (cla === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});