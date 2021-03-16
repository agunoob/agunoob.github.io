"use strict"

const baza =
{
    "nazwa":
    [
        {
            "id": 0,
            "title": "coding",
            "description": "codes, coding, js, css, scss, html, JSON, programming..",
            "longerDescription": "efjwoifjw jfoiw oifw jeoifwe oif wjeoifjewifweoi fweifwe",
            "examples":
            [
                {
                    "id": 0,
                    "title": "first project",
                    "photo": "src"
                },
                {
                    "id": 1,
                    "title": "second project",
                    "photo": "src"
                }
            ]
        },
        {
            "id": 1,
            "title": "photography",
            "description": "my photos, best photos, galleries..",
            "longerDescription": "duhd eudsu yr g ef gwjw d jw id s",
            "examples":
            [
                {
                    "id": 0,
                    "title": "sea",
                    "photo": "./photos/portfolio-photos/one.jpg"
                },
                {
                    "id": 1,
                    "title": "trees",
                    "photo": "./photos/portfolio-photos/two.jpg"
                },
                {
                    "id": 2,
                    "title": "alley",
                    "photo": "./photos/portfolio-photos/three.jpg"
                }
            ]
        },
        {
            "id": 2,
            "title": "drawings",
            "description": "my drawings, sketches, galleries..",
            "longerDescription": "ejf f erf ruer wen sn dsn sdfn sd sef usenfusnfeuwnefuwn eufn wuefuwe fuwef ",
            "examples":
            [
                {
                    "id": 0,
                    "title": "skylark",
                    "photo": "./photos/portfolio-drawings/skylark.jpg"
                },
                {
                    "id": 1,
                    "title": "frog",
                    "photo": "./photos/portfolio-drawings/frog.jpg"
                },
                {
                    "id": 2,
                    "title": "titmouse",
                    "photo": "./photos/portfolio-drawings/titmouse.jpg"
                }
            ]
        },
        {
            "id": 3,
            "title": "design",
            "description": "interior design, my projects, architecture..",
            "longerDescription": "wefj fowief w efyu we fo",
            "examples":
            [
                {
                    "id": 0,
                    "title": "project",
                    "photo": "src"
                }
            ]
        },
        {
            "id": 4,
            "title": "computer",
            "description": "MS Office, Linux, ..",
            "longerDescription": "dsduf udsnf oudsf dsnf osd nfdsnfion",
            "examples":
            [
                {
                    "id": 0,
                    "title": "computer aplications and programs",
                    "photo": "src"
                }
            ]
        },
        {
            "id": 5,
            "title": "games",
            "description": "big city, ..",
            "longerDescription": "idfjsif amd dwuefewufncndwc csndvbd sdvwreywefw do",
            "examples":
            [
                {
                    "id": 0,
                    "title": "city project",
                    "photo": "./photos/portfolio-city/1.png"
                },
                {
                    "id": 1,
                    "title": "city project",
                    "photo": "./photos/portfolio-city/2.png"
                },
                {
                    "id": 2,
                    "title": "city project",
                    "photo": "./photos/portfolio-city/4.png"
                }
            ]
        }
    ]
};

function dataBase(baza)
{
    const myJSON = JSON.stringify(baza);
    localStorage.setItem("storageJSON", myJSON);
    const getJSON = localStorage.getItem("storageJSON");
    return JSON.parse(getJSON);
};

function showArrowWhenScroll()
{
    const arrow = document.getElementById('arrow-box');
    window.onscroll = function showArrow()
    {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
        {
        arrow.style.display = "flex";
        } else {
        arrow.style.display = 'none';
        }
    }
    arrow.onclick = function scrollToTop()
    {
        window.scroll(0,0);
    }
};
showArrowWhenScroll();

function openBurger()
{
    const burger = document.getElementById('burger');
    const navBoxOpen = document.getElementById('nav-box-open');
    burger.onclick = function openMenu()
    {
        navBoxOpen.classList.add('nav-box-open')
            console.log('otwarte')
            //close burger with ANY click ???????????????????????????????????????????????
            navBoxOpen.addEventListener('click', function()
            {
            navBoxOpen.classList.remove('nav-box-open');
        })
    }
};
openBurger();

//close burger
// const closeBurger = document.getElementById('close-burger');
// closeBurger.onclick = function closeMenu()
// {
//     navBoxOpen.classList.remove('nav-box-open');
// };

function scrollToPartOfPage()
{
    const start = document.getElementById('start');
    const startPart = document.getElementById('start-part');
    start.onclick = function scrollToStart()
    {
        startPart.scrollIntoView();
    };

    const aboutMe = document.getElementById('about-me');
    const aboutMePart = document.getElementById('about-me-part');
    aboutMe.onclick = function scrollToaboutMe()
    {
        aboutMePart.scrollIntoView();
    };

    const portfolio = document.getElementById('portfolio');
    const portfolioPart = document.getElementById('portfolio-part');
    portfolio.onclick = function scrollToPortfolio()
    {
        portfolioPart.scrollIntoView();
    };

    const contact = document.getElementById('contact');
    const contactPart = document.getElementById('contact-part');
    contact.onclick = function scrollToContact()
    {
        contactPart.scrollIntoView();
    };

    const contactMe = document.getElementById('contact-me');
    contactMe.onclick = function scrollToContact()
    {
        contactPart.scrollIntoView();
    };
};
scrollToPartOfPage();

function buttonsAlerts()
{
    const btnCheckMyCv = document.getElementById('check-my-cv-btn');
    btnCheckMyCv.onclick = function btnCheckMyCv()
    {
    alert('It doesnt work yet');
    }

    const btnSend = document.getElementById('btn-send');
    btnSend.onclick = function btnSend()
    {
    alert('It doesnt work yet');
    }
};
buttonsAlerts();

let mojaBaza = dataBase(baza);

function photoCover()
{
    let photoCover = document.getElementsByClassName('photo-cover');
    for (let k = 0; k < photoCover.length; k++)
    {
        let shortDescription = document.createElement('p');
        shortDescription.innerHTML = mojaBaza.nazwa[k].description;
        photoCover[k].insertBefore(shortDescription, photoCover[k].firstChild);

        let header = document.createElement('h4');
        header.innerHTML = mojaBaza.nazwa[k].title;
        photoCover[k].insertBefore(header, photoCover[k].firstChild);
    }
};
photoCover();

function portfolio()
{
    const btns = document.getElementsByClassName('btn');
    for (let i = 0; i < btns.length; i++)
    {
        btns[i].onclick = function openModal()
        {
            // console.log('nr zdjecia: ', i)
            let bG = createModalBg();
            let content = createModalContent(bG);
            createModalExit(content, bG);
            titleInModal(content, i);
            longerDescriptionInModal(content, i);
            divForProjects(content, i);
        }
    }
};
portfolio();

function createModalBg()
{
    const createModalBg = document.createElement('div');
    let modalBg = document.getElementById('portfolio-part').appendChild(createModalBg);
    modalBg.classList.add('modal-bg');
    return modalBg;
};

function createModalContent(modalBg)
{
       const createModalContent = document.createElement('div');
        let modalContent = modalBg.appendChild(createModalContent);
        modalContent.classList.add('modal-content', 'modal-content-open');
        return modalContent;
};

function createModalExit(modalContent, modalBg)
{
    const createExitImg = document.createElement('img');
    let exitImg = modalContent.appendChild(createExitImg);
    exitImg.src = './photos/icons/cancel-orange.svg';
    exitImg.classList.add('exit-img');
    //close modal
    exitImg.onclick = function closeModal()
    {
        modalBg.style.display = 'none';
    }
    window.onclick = function closeModalOutside (event)
    {
        if (event.target == modalBg)
        {
            modalBg.style.display = 'none';
        }
    }
};

function titleInModal(modalContent, i)
{
    const createTitleInModal = document.createElement('h3');
    let title = modalContent.appendChild(createTitleInModal);
    title.innerHTML = mojaBaza.nazwa[i].title;
};

function longerDescriptionInModal(modalContent, i)
{
    const createLongerDescriptionInModal = document.createElement('h2');
    let longerDescription = modalContent.appendChild(createLongerDescriptionInModal);
    longerDescription.innerHTML = mojaBaza.nazwa[i].longerDescription;
};

function divForProjects(modalContent, i)
{
    const createDivForProjects = document.createElement('div');
    let divForProjects = modalContent.appendChild(createDivForProjects);
    divForProjects.classList.add('div-for-projects');
    function displayProjects()
    {
        for (let j in mojaBaza.nazwa[i].examples)
        {
            console.log(j, i)
            const createDisplayProjects = document.createElement('div');
            let displayProjects = divForProjects.appendChild(createDisplayProjects);
            displayProjects.classList.add('display-projects');

            const createNameOfProject = document.createElement('h2');
            let nameOfProject = displayProjects.appendChild(createNameOfProject);
            nameOfProject.innerHTML = mojaBaza.nazwa[i].examples[j].title;

            const createProjectImg = document.createElement('img');
            let projectImg = displayProjects.appendChild(createProjectImg);
            projectImg.src = mojaBaza.nazwa[i].examples[j].photo;
            projectImg.onclick = function openImg()
            {
                let imgModalBg = divImgModalBg(displayProjects);
                imgModal(i, j, imgModalBg);
                exitImgModal(imgModalBg);
            }
        }
    }
    displayProjects();
};

function divImgModalBg(displayProjects)
{
    const createImgModalBg = document.createElement('div');
    let imgModalBg = displayProjects.appendChild(createImgModalBg);
    imgModalBg.classList.add('img-modal-bg');
    return imgModalBg;
};

function imgModal(i, j, imgModalBg)
{
    const createImgModal = document.createElement('img');
    let imgModal = imgModalBg.appendChild(createImgModal);
    imgModal.src = mojaBaza.nazwa[i].examples[j].photo;
};

function exitImgModal(imgModalBg)
{
    window.onclick = function closeModalImgOutside (event)
    {
        if (event.target == imgModalBg)
        {
            imgModalBg.style.display = 'none';
        }
    }

//     //show modal btn when hover 400px from top
//     imgModalBg.addEventListener("mousemove", function(event) {
//         if(event.screenY < 400)
//         {
//             exitImgModal.classList.add('show-exit-btn');
//         }
//         else if(event.screenY > 400)
//         {
//             exitImgModal.classList.remove('show-exit-btn');
//         }
//     })
};

function showSkills()
{
    const itemsy = document.querySelectorAll('.skills-items');
    const skills = document.querySelectorAll('.skills-bar');
    const bars = document.querySelectorAll('.bar');
    const shineHeader = document.querySelectorAll('.header');
    const number = document.querySelectorAll('.number');

    for (let i = 0; i < itemsy.length; i++)
    {
        itemsy[i].onmouseenter = function()
        {
            console.log('mouseOVER icon', i)
            skills[i].classList.add('open');
            shineHeader[i].classList.add('shine-header');

            if (i==0)
            {
                bars[0].classList.add('bar-html');
                number[0].classList.add('number-show');
                let counter = 0;
                setInterval(()=>
                {
                    if(counter == 70)
                    {
                        clearInterval();
                    }
                    else
                    {
                        counter++;
                        number[0].innerHTML = counter + '%';
                    }
                }, 25);
            }
            else if (i==1)
            {
               bars[1].classList.add('bar-css');
               number[1].classList.add('number-show');
               let counter = 0;
               setInterval(()=>
               {
                   if(counter == 60)
                   {
                       clearInterval();
                   }
                   else
                   {
                       counter++;
                       number[1].innerHTML = counter + '%';
                   }
               }, 30);
            }
            else if (i==2)
            {
                bars[2].classList.add('bar-js');
                number[2].classList.add('number-show');
                let counter = 0;
                setInterval(()=>
                {
                    if(counter == 40)
                    {
                        clearInterval();
                    }
                    else
                    {
                        counter++;
                        number[2].innerHTML = counter + '%';
                    }
                }, 40);
            }
        }
      
        skills[i].onmouseleave = function()
        {
            console.log('mouseOUT modal', i)
            skills[i].classList.remove('open');
            shineHeader[i].classList.remove('shine-header');

            if (i==0)
            {
                bars[0].classList.remove('bar-html');
                number[0].classList.remove('number-show');
            }
            else if (i==1)
            {
                bars[1].classList.remove('bar-css');
                number[1].classList.remove('number-show');
            }
            else if (i==2)
            {
                bars[2].classList.remove('bar-js');
                number[2].classList.remove('number-show');
            }
        }
    }
};
showSkills();

function startAnimation()
{
    const skillsBox = document.querySelector('.skills-box');
    window.addEventListener("scroll", function() {
        if (window.scrollY > (skillsBox.offsetTop) && window.scrollY < (skillsBox.offsetTop + skillsBox.offsetHeight))
        {
            console.log('jestem')
            const skillsInnerBox = document.querySelector('.skills-inner-box');
            skillsInnerBox.classList.add('open-skills-mobile');
            const skillsBar = document.querySelectorAll('.skills-bar');
            const shineHeader = document.querySelectorAll('.header');
            const number = document.querySelectorAll('.number');
            const bars = document.querySelectorAll('.bar');

            skillsBar.forEach(element =>
            {
                element.classList.add('skills-bar-mobile');
            });

            shineHeader.forEach(e =>
            {
                e.classList.add('shine-header');
            });

            number.forEach(num =>
            {
                num.classList.add('number-show');
            });

            for (let i = 0; i < bars.length; i++)
            {
                bars[0].classList.add('bar-html');
                let counter = 0;
                setInterval(()=>
                {
                    if(counter == 70)
                    {
                        clearInterval();
                    }
                    else
                    {
                        counter++;
                        number[0].innerHTML = counter + '%';
                    }
                }, 25);
               
                bars[1].classList.add('bar-css');
                let counterTwo = 0;
                setInterval(()=>
                {
                    if(counterTwo == 60)
                    {
                        clearInterval();
                    }
                    else
                    {
                        counterTwo++;
                        number[1].innerHTML = counterTwo + '%';
                    }
                }, 30);

                bars[2].classList.add('bar-js');
                let counterThree = 0;
                setInterval(()=>
                {
                    if(counterThree == 40)
                    {
                        clearInterval();
                    }
                    else
                    {
                        counterThree++;
                        number[2].innerHTML = counterThree + '%';
                    }
                }, 40);
            }
        }
    })
}
startAnimation();

//no picture dragging
window.ondragstart = function()
{ 
    return false; 
};
