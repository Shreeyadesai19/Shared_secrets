/*change background header start*/ 
// function scroll(){
//     const header = document.getElementById('header')
//     //when scroll is greater than 50 viewport height, add the scroll header class to the header tag
//     if(this.scrollY >= 50) 
//         header.classList.add('scroll-header'); 
//     else
//         header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scroll)
/*change background header end*/



/*Scroll sections active link start*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll' , scrollActive)


// window.addEventListener("scroll", () => {
//     const sections = document.querySelectorAll("section");
//     const scrollY = window.pageXOffset;

//     sections.forEach(current => {
//         let sectionHeight = current.offsetHeight;
//         let sectionTop = current.offsetTop - 50;
//         let id = current.getAttribute("id");

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector(".nav__item a[href*=" + id + "]").classList.add("active-link");
//         }
//         else{
//             document.querySelector(".nav__item a[href*=" + id + "]").classList.remove("active-link")
//         }
//     });
// });

/*Scroll sections active link end*/



/*dark theme start*/
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'bx-sun'

// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme)?'bx bx-moon':'bx bx-sun'

// if(selectedTheme){
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
// }

// themeButton.addEventListener('click', () => {
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)

//     localStorage.setItem('selected-theme' , getCurrentTheme())
//     localStorage.setItem('selected-icon' , getCurrentIcon())
// })



const themebtn = document.querySelector(".theme-btn");

themebtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themebtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themebtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]('dark-theme');
    themebtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
/*dark theme end*/



/*portfolio filter*/
const filterContainer = document.querySelector('.notes-filter'),
notesItemContainer = document.querySelector('.notes-items'),
notesItems = document.querySelectorAll('.img-card-container');
let itemIndex, slideIndex;


filterContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("filter-item") && !event.target.classList.contains('active')){
        filterContainer.querySelector('.active').classList.remove('button','active');
        event.target.classList.add('active','button');

        const target = event.target.getAttribute('data-target');
        
        notesItems.forEach((item) => {
            if(target === item.getAttribute('data-category') || target === 'all'){
                item.classList.remove('hide');
                item.classList.add('show')
            }
            else{
                item.classList.remove('show');
                item.classList.add('hide')
            }
        })
    }
})
/*portfolio filter end*/



/*notes model start*/
const notesModals = document.querySelectorAll(".notes-model");
const imgCard = document.querySelectorAll(".img-card");
const notesClose = document.querySelectorAll(".notes-close-btn");

var notesModal = function(modalClick){
    notesModals[modalClick].classList.add('active');
}

imgCard.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () =>{
        notesModal(i);
    });
});

notesClose.forEach((notesClose) => {
    notesClose.addEventListener("click", () =>{
        notesModals.forEach((notesModalView) => {
            notesModalView.classList.remove("active");
        });
    });
});
/*notes model end*/




/*scroll up start*/
const scrollUpbtn = document.querySelector('.scrollup');

window.addEventListener("scroll", function(){
    scrollUpbtn.classList.toggle("active", window.scrollY > 500);
});

scrollUpbtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
/*scroll up end*/



/*responsive nav menu start*/
const menubtn = document.querySelector(".nav-menu-btn");
const closebtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelectorAll(".nav__items a");

menubtn.addEventListener("click", () => {
    navigation.classList.add("active-link");
});

closebtn.addEventListener("click", () => {
    navigation.classList.remove("active-link");
});

navItem.forEach((navItem) =>{
    navItem.addEventListener("click", ()=> {
        navigation.classList.remove("active-link");
    });
});
/*responsive nav menu end*/


/*scroll reveal start*/
// ScrollReveal({ 
//     reset: true,
//     distance: '60px',
//     duration: 2500,
//     delay: 100 
// });

// ScrollReveal().reveal('.home .info h3, .section-title-01', {
//     delay: 500, 
//     origin: 'left'
// });

// ScrollReveal().reveal('.home .info p, .section-title-02', {
//     delay: 600, 
//     origin: 'right'
// });

// ScrollReveal().reveal('.media__icons i', {
//     delay: 500, 
//     origin: 'left',
//     interval: 200
// });

// ScrollReveal().reveal('.home__img, about__img, .about__info', {
//     delay: 500, 
//     origin: 'bottom'
// });

// ScrollReveal().reveal('.about .description', {
//     delay: 500, 
//     origin: 'left'
// });



// ScrollReveal().reveal('footer .group', {
//     delay: 800, 
//     origin: 'bottom',
//     // interval: 200
// });

// ScrollReveal().reveal('.contact .contact-left', {
//     delay: 400, 
//     origin: 'left'
// });

// ScrollReveal().reveal('.contact .contact-right', {
//     delay: 400, 
//     origin: 'right'
// });


const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home .info h3, .section-title-01`)

sr.reveal(`.home .info p, .section-title-02`, {
    delay: 500,
    origin: 'right'
})

sr.reveal(`.media__icons i, .about .description`,{
    delay: 500,
    origin: 'top',
    interval: 200
})

sr.reveal(`.home .info a`, {
    delay: 500,
    origin: 'left',
    interval: 200
})

sr.reveal(`footer .group`, {
    delay: 600,
    origin: 'bottom'
})

sr.reveal(`.contact .contact-left`, {
    delay: 500,
    origin: 'left'
})

sr.reveal(`.contact .contact-right`, {
    delay: 600,
    origin: 'right'
})

sr.reveal(`.notes .notes-filter`, {
    delay: 300,
    origin: 'top'
})
/*scroll reveal start*/
