const nightScene = document.querySelector('.night');
const dayScene = document.querySelector('.day');
const themeBtnBar = document.getElementById('theme-btn-bar');
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const crescentMoon = document.getElementById('moon-container');


// Rendering Stars
function renderStars(){
    for (let i=0; i<200; i++){
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';
        star.style.animationDuration = 7+duration+'s';

        nightScene.appendChild(star);
    }
}


// Rendering Current Theme
let setTheme = localStorage.getItem('theme');
if (setTheme === null) {
    localStorage.setItem('theme', 'light');
    setTheme = 'light';
}
if (setTheme === 'dark'){
    themeBtn.style.left = "21px";
    themeBtn.style.backgroundColor = "#301934";
    themeIcon.src = "/icons/moon-regular.png";
    nightScene.style.opacity = '1';
    dayScene.style.opacity = '0';
    crescentMoon.style.display = 'initial';
    renderStars();
}


// Theme Button Slide
themeBtnBar.addEventListener('click', slideBtn);
function slideBtn(){
    if (themeBtn.style.left === "-1px"){
        themeBtn.style.left = "21px";
        themeBtn.style.backgroundColor = "#301934";
        themeIcon.src = "/icons/moon-regular.png";
    } else {
        themeBtn.style.left = "-1px";
        themeIcon.src = "/icons/sun-regular.png";
        themeBtn.style.backgroundColor = "";
    }
    toggleTheme();
}


// Change Light/Dark Theme
function toggleTheme(){
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark'){
        localStorage.setItem('theme', 'light');
        crescentMoon.style.display = 'none';
        nightScene.style.opacity = '0';
        dayScene.style.opacity = '1';
    
        let stars = document.querySelectorAll('.night i');
        stars.forEach(star => star.style.backgroundColor = 'rgba(0,0,0,0)');
        setTimeout(() => {
            stars.forEach(star => star.remove());
        }, 2000);

    } else if (currentTheme === 'light'){
        localStorage.setItem('theme', 'dark');
        
        setTimeout(() => {
            crescentMoon.style.removeProperty('display');
        }, 2000);

        nightScene.style.opacity = '1';
        dayScene.style.opacity = '0';
        renderStars();
    }

}


