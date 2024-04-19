/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navBar = document.querySelector('.navbar__menu')
const navList = document.querySelector('.navbar__list');
const sections = document.querySelectorAll('section');
const backToTopBtn = document.querySelector('#backToTop');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function buildNav() {
    sections.forEach(section => {
        //Create the li elements that contained inside the ul
        const navItem = document.createElement('li');
        //Insert the html text to  the li
        navItem.insertAdjacentHTML("afterbegin", `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        //scroll function invoke
        scrollFunction(navItem, section);
        //Append the li to the ul
        navList.appendChild(navItem);
    });

    //Append the ul to the nav
    navBar.appendChild(navList);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
buildNav();

// Add class 'active' to section when near top of viewport
function activeSection() {
    // Select all anchor using "menu__link" class
    const navActive = document.querySelectorAll(".menu__link");
    sections.forEach((section, i) => {
        //Get the bound for each section
        const sectionBond = section.getBoundingClientRect();
        //Check if the section is in viewport or not
        if (sectionBond.top <= 380 && sectionBond.bottom >= 360) {
            //section in viewport accourding to top and bottom boundings
            //add 'your-active-class' class to the specific section
            section.classList.add("your-active-class");
            //add 'active_button' class to the specific nav button according to section ID
            navActive[i].classList.add("active_button");
        } else {
            //Remove both section and navButton active classes when section is off sight
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button");
        }
    })
}

// Add event to nav bar item just rendering.
// When click on nav bar item, the screen will scroll down to the corresponding section.
function scrollFunction(navItem, section) {
    navItem.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop - 30,
            behavior: "smooth"
        });
    });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Scroll to section on link click
window.addEventListener('scroll', () => {
    activeSection();
})

// When scroll down 500px from the top of the document, show the button
window.onscroll = function () {
    showBtnBackToTop();
};

// Function for show 'backToTop' button when satisfy condition
function showBtnBackToTop() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

// Add event for button 'backToTop' when click
document.getElementById("backToTop").addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

$(document).ready(function() {
    $('#toggle').click(function() {
        $('nav').slideToggle();
    });
})
