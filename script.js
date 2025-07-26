let home = document.querySelector("#home");
home.addEventListener("click", () => {
    let homeSec = document.querySelector(".first-section");
    homeSec.scrollIntoView({behavior: "smooth"});
});

let services = document.querySelector("#services");
services.addEventListener("click", () => {
    let servSec = document.querySelector(".services-section");
    servSec.scrollIntoView({behavior: "smooth"});
});

let about = document.querySelector("#about");
about.addEventListener("click", () => {
    let aboutSec = document.querySelector(".about-section");
    aboutSec.scrollIntoView({behavior: "smooth"});
});

let contact = document.querySelector("#contact");
contact.addEventListener("click", () => {
    let contactSec = document.querySelector(".contact-section");
    contactSec.scrollIntoView({behavior: "smooth"});
});

let myProBtn = document.querySelector(".my-project-btn");
myProBtn.addEventListener("click", () => {
    let projectSec = document.querySelector(".pro-section");
    projectSec.scrollIntoView({behavior: "smooth"});
});



let hamBurger = document.querySelector(".burger");
let navbarHeight = document.querySelector(".navbar")
let navDis = document.querySelector(".nav-list-first");
let navDis2 = document.querySelector(".nav-list-sec");

hamBurger.addEventListener("click", () => {
    
    navDis.classList.toggle("nav-d");

    
    navDis2.classList.toggle("nav-d");


    navbarHeight.classList.toggle("navbar-h")
    
});