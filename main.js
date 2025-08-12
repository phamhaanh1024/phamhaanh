let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    sidebar.classList.toggle('show');
};

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};

// ABOUT ANIMATION

document.addEventListener("DOMContentLoaded", function() {
    var aboutCircle = document.querySelector(".about-circle");
    var aboutImg = document.querySelector(".about-img");
    var aboutContent = document.querySelector(".about-content");

    window.addEventListener("scroll", function() {
        var aboutPosition = document.querySelector(".about").offsetTop;
        var windowHeight = window.innerHeight;
        var scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition > aboutPosition - windowHeight / 2) {
            aboutCircle.style.opacity = 1;
            aboutCircle.style.transform = "translateX(0)";
            aboutImg.style.opacity = 1;
            aboutImg.style.transform = "translateX(0)";
            aboutContent.style.opacity = 1;
            aboutContent.style.transform = "translateX(0)";
        }
    });
});
// REMOVE SIDEBAR

const navLink = document.querySelectorAll('.sidebar__link')

const linkAction = () => {
    const navMenu = document.getElementById('sidebar')
    navMenu.classList.remove('show');
    menuIcon.classList.remove('fa-xmark');
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// SKILL REACT
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


// SHOW SCROLL UP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// SCROLL SECTIONS ACTIVE LINK
const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// CUON CHUOT

document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('.navbar a');
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
            behavior: 'smooth'
        });
    }

    const scrollUpButton = document.getElementById('scroll');

    scrollUpButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// SLIDER
let slider = document.querySelector('.projects__slider .projects__list');
let items = document.querySelectorAll('.projects__slider .projects__list .projects__item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.projects__slider .projects__dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 4000);

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.projects__slider .projects__dots li.anim');
    last_active_dot.classList.remove('anim');
    dots[active].classList.add('anim');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 4000);


}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

let links = document.querySelectorAll('.projects__item .projects__slide-link');

links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        active = index;
        reloadSlider();
    });
});

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    var doituongmenutrai = document.querySelector(".left");
    var doituongmenuphai = document.querySelector(".navbar");
    var trangthai = "duoi110";

    window.addEventListener("scroll", function() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 110) {
            if (trangthai === "duoi110") {
                console.log("ok ");
                trangthai = "tren110";
                doituongmenutrai.classList.add("nholaitrai");
                doituongmenuphai.classList.add("nholaiphai");
            }
        } else if (window.pageYOffset <= 110) {
            if (trangthai === "tren110") {
                doituongmenutrai.classList.remove("nholaitrai");
                doituongmenuphai.classList.remove("nholaiphai");
                trangthai = "duoi110";
            }
        }
    });
});


// PRELOAD IMAGE

function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = url;
    });
}

const imagePaths = [
    './img/img-abt.jpg',
    './img/Bg1.jpg',
    './img/Dung.jpg',
    './img/Nga.jpg',
    './img/Thuong.jpg',
    './img/Capture1.PNG',
    './img/Capture2.PNG',
    './img/Capture3.PNG',
    './img/Capture4.PNG',
    './img/Capture5.PNG',
    './img/Capture6.PNG',
    './img/Capture7.PNG',
    './img/buoi1.jpg',
    './img/Buoi2.jpg',
    './img/buoi3.jpg',
    './img/Buoi4.jpg',
    './img/buoi5.jpg',
    './img/buoi6.jpg',
    './img/buoi7.jpg',
    './img/buoi8.jpg',



];

Promise.all(imagePaths.map(preloadImage))
    .then(() => {
        console.log('Tất cả các hình ảnh đã được preload.');
    })
    .catch((error) => {
        console.error('Có lỗi xảy ra khi preload hình ảnh:', error);
    });

// CONTACT

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Send message done!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {

    if (!checkRequiredFields()) {
        alert('Please fill in the missing information');
        event.preventDefault();
    }
});

function checkRequiredFields() {

    const requiredFields = document.querySelectorAll('#contactForm [required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (field.value.trim() === '') {
            isValid = false;
        }
    });

    return isValid;
}