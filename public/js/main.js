let scene = document.querySelectorAll('.scene');
let nightScene = document.querySelector('.night');
let dayScene = document.querySelector('.day');


// Rendering Stars
function stars(){
    for (let i=0; i<700; i++){
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
if (setTheme === 'light'){
    nightScene.style.opacity = '0';
    dayScene.style.opacity = '1';
} else {
    stars();
}


// Change Light/Dark Theme
scene.forEach(x=> x.addEventListener('click', changeTime));
function changeTime(){
    
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || currentTheme === null){
        localStorage.setItem('theme', 'light');
        nightScene.style.opacity = '0';
        dayScene.style.opacity = '1';
    
        let stars = document.querySelectorAll('.night i');
        stars.forEach(star => star.style.backgroundColor = 'rgba(0,0,0,0)');
        setTimeout(() => {
            stars.forEach(star => star.remove());
        }, 2000);

    } else if (currentTheme === 'light'){
        localStorage.setItem('theme', 'dark');
        nightScene.style.opacity = '1';
        dayScene.style.opacity = '0';
        stars();
    }

}


