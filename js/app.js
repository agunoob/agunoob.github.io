"use strict"

//show arrow when scroll
const arrow = document.getElementById('arrow-box');
window.onscroll = function showArrow() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      arrow.style.display = "flex";
    } else {
      arrow.style.display = 'none';
    }
  }

//scroll to start
arrow.onclick = function scrollToTop() {
    window.scroll(0,0);
};

//open burger
const burger = document.getElementById('burger');
const navBoxOpen = document.getElementById('nav-box-open');
burger.onclick = function openMenu() {
    navBoxOpen.classList.add('nav-box-open')
        console.log('otwarte')
        //close burger with ANY click ???????????????????????????????????????????????
        navBoxOpen.addEventListener('click', function(){
        navBoxOpen.classList.remove('nav-box-open');
    })
};

//close burger
// const closeBurger = document.getElementById('close-burger');
// closeBurger.onclick = function closeMenu() {
//     navBoxOpen.classList.remove('nav-box-open');
// };

//scroll to part of the page
const start = document.getElementById('start');
const startPart = document.getElementById('start-part');
start.onclick = function scrollToStart() {
    startPart.scrollIntoView();
};

const aboutMe = document.getElementById('about-me');
const aboutMePart = document.getElementById('about-me-part');
aboutMe.onclick = function scrollToaboutMe() {
    aboutMePart.scrollIntoView();
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
contactMe.onclick = function scrollToContact() {
    contactPart.scrollIntoView();
};

// //btns alerts
// const btnCheckMyCv = document.getElementById('check-my-cv-btn');
// btnCheckMyCv.onclick = function btnCheckMyCv() {
//  alert('It doesnt work yet');
// };

// const btnFirstPic = document.getElementById('btn-first-pic');
// btnFirstPic.onclick = function btnFirstPic() {
//  alert('It doesnt work yet');
// };

// const btnSecondPic = document.getElementById('btn-second-pic');
// btnSecondPic.onclick = function btnSecondPic() {
//  alert('It doesnt work yet');
// };

// const btnThirdPic = document.getElementById('btn-third-pic');
// btnThirdPic.onclick = function btnThirdPic() {
//  alert('It doesnt work yet');
// };

// const btnFourthPic = document.getElementById('btn-fourth-pic');
// btnFourthPic.onclick = function btnFourthPic() {
//  alert('It doesnt work yet');
// };

// const btnFifthPic = document.getElementById('btn-fifth-pic');
// btnFifthPic.onclick = function btnFifthPic() {
//  alert('It doesnt work yet');
// };

// const btnSixthPic = document.getElementById('btn-six-pic');
// btnSixthPic.onclick = function btnSixthPic() {
//  alert('It doesnt work yet');
// };

// const btnSend = document.getElementById('btn-send');
// btnSend.onclick = function btnSend() {
//  alert('It doesnt work yet');
// };

//view portfolio
const btns = document.getElementsByClassName('btn');
console.log(btns.length);
for (let i = 0; i < btns.length; i++)
{
    btns[i].onclick = function openModal()
    {
        //modal
        const createModalBg = document.createElement('div');
        let modalBg = document.getElementById('portfolio-part').appendChild(createModalBg);
        modalBg.classList.add('modal-bg');

        //modal content
        const createModalContent = document.createElement('div');
        let modalContent = modalBg.appendChild(createModalContent);
        modalContent.classList.add('modal-content');

        //modal exit
        const createExitImg = document.createElement('img');
        let exitImg = modalContent.appendChild(createExitImg);
        exitImg.src = './photos/cancel-orange.svg';
        exitImg.classList.add('exit-img');

        // zamykanie modala
        exitImg.onclick = function closeModal() {
            modalBg.style.display = 'none';
        }
        window.onclick = function closeModalOutside (event) {
            if (event.target == modalBg) {
                modalBg.style.display = 'none';
            }
        }
    };
}





//no picture dragging
window.ondragstart = function() { 
    return false; 
};