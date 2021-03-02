"use strict"

const arrow = document.getElementById('arrow-box');
window.onscroll = function showArrow() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      arrow.style.display = "block";
    } else {
      arrow.style.display = 'none';
    }
  }

arrow.onclick = function scrollToTop() {
    window.scrollTo(0,0);
};

const aboutMe = document.getElementById('about-me');
const aboutMePart = document.getElementById('about-me-part');
aboutMe.onclick = function scrollToAboutMe() {
    aboutMePart.scrollIntoView();
};

const skills = document.getElementById('skills');
const skillsPart = document.getElementById('skills-part');
skills.onclick = function scrollToSkills() {
    skillsPart.scrollIntoView();
};

const portfolio = document.getElementById('portfolio');
const portfolioPart = document.getElementById('portfolio-part');
portfolio.onclick = function scrollToPortfolio() {
    portfolioPart.scrollIntoView();
};

const contact = document.getElementById('contact');
const contactPart = document.getElementById('contact-part');
contact.onclick = function scrollToContact() {
    contactPart.scrollIntoView();
};

const contactMe = document.getElementById('contact-me');
// const contactPart = document.getElementById('contact-part');
contactMe.onclick = function scrollToContact() {
    contactPart.scrollIntoView();
};