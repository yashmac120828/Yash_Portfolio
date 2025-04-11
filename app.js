let body = document.querySelector("body");
let nav = document.querySelectorAll("nav");
let themeButton = document.querySelector(".theme");
let hr = document.querySelectorAll(".hr"); 
let theme = localStorage.getItem('theme') || 'light'; 
let netf = document.querySelector(".netf");
let amazon = document.querySelector(".amzn");
let p = document.querySelectorAll(".p");
let c1 = document.querySelectorAll(".c1");

if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
}
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.right ul');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.right a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        netf.src = `images/darknetflix.png`;
        amazon.src = `images/darkamzon.png`;
        themeButton.innerHTML = `<i class="fa-regular fa-moon"></i>`;
        themeButton.style.backgroundColor = "#b2679a"; 
        body.style.backgroundColor = "#0e050f";
        body.style.color = "#fff";
        p.forEach(px => {
            px.style.color = "#fff";
        });
        hr.forEach(h => {
            h.style.borderColor = "#170b3b";
        });
        nav.forEach(n => {
            n.style.backgroundColor = "#170b3b";
        });
        c1.forEach(cx => {
            cx.style.color = "#fff"; 
        });
    } else {
        netf.src = `images/lightnetflix.png`;
        amazon.src = `images/lightamazon.png`;
        themeButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        themeButton.style.backgroundColor = "#b2679a"; 
        body.style.backgroundColor = "white";
        body.style.color = "#31424a";
        p.forEach(px => {
            px.style.color = "#31424a";
        });
        nav.forEach(n => {
            n.style.backgroundColor = "#31424a";
        });
        c1.forEach(cx => {
            cx.style.color = "#31424a"; 
        });
    }
}

function toggleTheme() {
    theme = (theme === 'dark') ? 'light' : 'dark';
    applyTheme(theme);
}

document.addEventListener("DOMContentLoaded", () => {
    applyTheme(theme); 
    themeButton.addEventListener('click', toggleTheme);

    const secondSection = document.querySelector('.secondSection');
    const imgSkills = document.querySelectorAll('.imgskills');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imgSkills.forEach(imgSkill => {
                    imgSkill.classList.add('popout'); 
                });
            } else {
                imgSkills.forEach(imgSkill => {
                    imgSkill.classList.remove('popout'); 
                });
            }
        });
    });

    observer.observe(secondSection);
    imgSkills.forEach(imgSkill => {
        imgSkill.addEventListener('animationend', () => {
            imgSkill.classList.remove('popout'); 
        });
    });
});