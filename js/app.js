"use strict"

const baza =
{
    "nazwa":
    [
        {
            "id": 0,
            "title": "projects",
            "description": "my first projects",
            "longerDescription": "My first projects created during 3-month internship in Snabel Sp. z o.o. This Business Card website is also an effect of that work.",
            "examples":
            [
                {
                    "id": 0,
                    "title": "simple calculator",
                    "photo": "./photos/portfolio-projects/calc-1.png"
                },
                {
                    "id": 1,
                    "title": "another calculator",
                    "photo": "./photos/portfolio-projects/calc-2.png"
                },
                {
                    "id": 2,
                    "title": "online shop",
                    "photo": "./photos/portfolio-projects/shop-1.png"
                },
                {
                    "id": 3,
                    "title": "online shop- modal",
                    "photo": "./photos/portfolio-projects/shop-2.png"
                },
                {
                    "id": 4,
                    "title": "online shop- cart",
                    "photo": "./photos/portfolio-projects/shop-3.png"
                },
                {
                    "id": 5,
                    "title": "simple text editor",
                    "photo": "./photos/portfolio-projects/txt-editor.png"
                }
            ]
        },
        {
            "id": 1,
            "title": "photography",
            "description": "some of my photos",
            "longerDescription": "Some sceneries need to be captured.",
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
            "description": "my drawings",
            "longerDescription": "I love to image beautiful nature. Here are some of my drawings with color pencils on paper.",
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
            "description": "learning web desing and tools, looking for inspirations",
            "longerDescription": "I found this graphics editing app very useful. Here is my first web design attempt so far.",
            "examples":
            [
                {
                    "id": 0,
                    "title": "learning Figma",
                    "photo": "./photos/portfolio-figma/figma.png"
                },
                {
                    "id": 1,
                    "title": "learning Figma",
                    "photo": "./photos/portfolio-figma/wooden-figma.png"
                }
            ]
        },
        {
            "id": 4,
            "title": "",
            "description": "",
            "longerDescription": "",
            "examples":
            [
                {
                    "id": 0,
                    "title": "",
                    "photo": "src"
                }
            ]
        },
        {
            "id": 5,
            "title": "games",
            "description": "Even trivial computer games can relieve creativity",
            "longerDescription": "I also like playing computer games especially when i can build and design in them. Here is my huge city project in Minecraft that took me few years.",
            "examples":
            [
                {
                    "id": 0,
                    "title": "1 view",
                    "photo": "./photos/portfolio-city/1.png"
                },
                {
                    "id": 1,
                    "title": "2 view",
                    "photo": "./photos/portfolio-city/2.png"
                },
                {
                    "id": 2,
                    "title": "3 view",
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
        window.scroll({top:0, behavior: "smooth"});
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
        startPart.scrollIntoView({behavior: "smooth"});
    };

    const aboutMe = document.getElementById('about-me');
    const aboutMePart = document.getElementById('about-me-part');
    aboutMe.onclick = function scrollToaboutMe()
    {
        aboutMePart.scrollIntoView({behavior: "smooth"});
    };

    const portfolio = document.getElementById('portfolio');
    const portfolioPart = document.getElementById('portfolio-part');
    portfolio.onclick = function scrollToPortfolio()
    {
        portfolioPart.scrollIntoView({behavior: "smooth"});
    };

    const contact = document.getElementById('contact');
    const contactPart = document.getElementById('contact-part');
    contact.onclick = function scrollToContact()
    {
        contactPart.scrollIntoView({behavior: "smooth"});
    };

    const contactMe = document.getElementById('contact-me');
    contactMe.onclick = function scrollToContact()
    {
        contactPart.scrollIntoView({behavior: "smooth"});
    };
};
scrollToPartOfPage();

function buttonsAlerts()
{
    const btnCheckMyCv = document.getElementById('check-my-cv-btn');
    btnCheckMyCv.onclick = function btnCheckMyCv()
    {
        const createCvBg = document.createElement('div');
        let cvBg = document.getElementById('start-part').appendChild(createCvBg);
        cvBg.classList.add('cv-bg');

        const createCv = document.createElement('img');
        let cv = cvBg.appendChild(createCv);
        cv.src = './photos/cv-eng.svg';
        cv.classList.add('cv');

        const createExitButtonCv = document.createElement('img');
        let exitButtonCv = cvBg.appendChild(createExitButtonCv);
        exitButtonCv.src = './photos/icons/cancel-orange.svg';
        exitButtonCv.classList.add('exit-img-modal');
        
        exitButtonCv.onclick = function()
        {
            // console.log('exitButtonModal klik')
            cvBg.style.display = 'none';
        }

        window.onclick = function closeCvOutside (event)
        {
            if (event.target == cvBg)
            {
                // console.log('target modalBg klik')
                cvBg.style.display = 'none';
            }
        }
    }

    const btnSend = document.getElementById('btn-send');
    btnSend.onclick = function btnSend()
    {
        alert('Thank you for you message!');
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
            //empty element of portfolio
            if (i == 4)
            { 
                alert('Sorry! This one is still empty');
            }

            else
            {
                let bG = createModalBg();
                let content = createModalContent(bG);
                createModalExit(content, bG);
                titleInModal(content, i);
                longerDescriptionInModal(content, i);
                divForProjects(content, i);
            }
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
        console.log('exitImg klik')
        modalBg.style.display = 'none';
    }
    window.onclick = function closeModalOutside (event)
    {
        if (event.target == modalBg)
        {
            console.log('target modalBg klik')
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
    const createExitButtonModal = document.createElement('img');
    let exitButtonModal = imgModalBg.appendChild(createExitButtonModal);
    exitButtonModal.src = './photos/icons/cancel-orange.svg';
    exitButtonModal.classList.add('exit-img-modal');
    
    exitButtonModal.onclick = function()
    {
        console.log('exitButtonModal klik')
        imgModalBg.style.display = 'none';
    }

    window.onclick = function closeModalImgOutside (eventTwo)
    {
        if (eventTwo.target == imgModalBg)
        {
            console.log('imgModalBg klik')
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
    let odliczanie, odliczanieTwo, odliczanieThree;

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
                number[0].innerHTML = '0%';
                setTimeout(function()
                {
                    odliczanie = setInterval(()=>
                    {
                        if(counter == 70)
                        {
                            clearInterval(odliczanie);
                        }
                        else
                        {
                            counter++;
                            number[0].innerHTML = counter + '%';
                            // console.log(counter)
                        }
                        return
                    }, 25)
                }, 700);
            }
            else if (i==1)
            {
               bars[1].classList.add('bar-css');
               number[1].classList.add('number-show');
               let counterTwo = 0;
               number[1].innerHTML = '0%';
               setTimeout(function()
               {
                odliczanieTwo = setInterval(()=>
                    {
                        if(counterTwo == 60)
                        {
                            clearInterval(odliczanieTwo);
                        }
                        else
                        {
                            counterTwo++;
                            number[1].innerHTML = counterTwo + '%';
                            // console.log(counterTwo)
                        }
                        return
                    }, 30)
                }, 700);
            }
            else if (i==2)
            {
                bars[2].classList.add('bar-js');
                number[2].classList.add('number-show');
                let counterThree = 0;
                number[2].innerHTML = '0%';
                setTimeout(function()
                {
                    odliczanieThree = setInterval(()=>
                    {
                        if(counterThree == 40)
                        {
                            clearInterval(odliczanieThree);
                        }
                        else
                        {
                            counterThree++;
                            number[2].innerHTML = counterThree + '%';
                            // console.log(counterThree)
                        }
                        return
                    }, 40)
                }, 700);
            }
        }
      
        skills[i].onmouseleave = function()
        {
            console.log('mouseOUT modal', i)
            skills[i].classList.remove('open');
            shineHeader[i].classList.remove('shine-header');

            if (i==0)
            {
                clearInterval(odliczanie);
                bars[0].classList.remove('bar-html');
                number[0].classList.remove('number-show');
                // number[0].innerHTML = '0%';
            }
            else if (i==1)
            {
                clearInterval(odliczanieTwo);
                bars[1].classList.remove('bar-css');
                number[1].classList.remove('number-show');
                // number[1].innerHTML = '0%';
            }
            else if (i==2)
            {
                clearInterval(odliczanieThree);
                bars[2].classList.remove('bar-js');
                number[2].classList.remove('number-show');
                // number[2].innerHTML = '0%';
            }
        }
    }
};
showSkills();

function showSkillsMobile()
{
    const skillsBox = document.querySelector('.skills-box');
    const skillsBar = document.querySelectorAll('.skills-bar');
    const shineHeader = document.querySelectorAll('.header');
    const number = document.querySelectorAll('.number');
    const bars = document.querySelectorAll('.bar');
    const skillsInnerBox = document.querySelector('.skills-inner-box');
    let odliczanie, odliczanieTwo, odliczanieThree;

    window.addEventListener("scroll", function() {
        if (window.scrollY > (skillsBox.offsetTop) && window.scrollY < (skillsBox.offsetTop + 4))
        // skillsBox.offsetHeight
        {
            console.log('ładuj')
            skillsInnerBox.classList.add('open-skills-mobile');
            number[0].innerHTML = '0%';
            number[1].innerHTML = '0%';
            number[2].innerHTML = '0%';
            
            skillsBar.forEach(element =>
            {
                element.classList.add('skills-bar-mobile');
                element.style.transition = 'height ease-out 0.6s, opacity ease 1s';
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
                // clearInterval(odliczanie);
                setTimeout(function()
                {
                    odliczanie = setInterval(()=>
                    {
                        if(counter == 70)
                        {
                            clearInterval(odliczanie);
                        }
                        else
                        {
                            counter++;
                            number[0].innerHTML = counter + '%';
                        }
                        return
                    }, 25)
                }, 700);
               
                bars[1].classList.add('bar-css');
                let counterTwo = 0;
                // clearInterval(odliczanieTwo);
                setTimeout(function()
                {
                    odliczanieTwo = setInterval(()=>
                    {
                        if(counterTwo == 60)
                        {
                            clearInterval(odliczanieTwo);
                        }
                        else
                        {
                            counterTwo++;
                            number[1].innerHTML = counterTwo + '%';
                        }
                        return
                    }, 30)
                }, 700);

                bars[2].classList.add('bar-js');
                let counterThree = 0;
                // clearInterval(odliczanieThree);
                setTimeout(function()
                {
                    odliczanieThree = setInterval(()=>
                    {
                        if(counterThree == 40)
                        {
                            clearInterval(odliczanieThree);
                        }
                        else
                        {
                            counterThree++;
                            number[2].innerHTML = counterThree + '%';
                        }
                        return
                    }, 40)
                }, 700);
            }
        }
        else if (window.scrollY < (skillsBox.offsetTop - 140) && window.scrollY > (skillsBox.offsetTop - 180) 
        || window.scrollY > (skillsBox.offsetTop + 220) && window.scrollY < (skillsBox.offsetTop + 260))
        {
            console.log('reset');
            clearInterval(odliczanie);
            clearInterval(odliczanieTwo);
            clearInterval(odliczanieThree);
            skillsInnerBox.classList.remove('open-skills-mobile');

            skillsBar.forEach(element =>
            {
                element.classList.remove('skills-bar-mobile');
                element.style.transition = 'none';
            });

            shineHeader.forEach(e =>
            {
                e.classList.remove('shine-header');
            });

            number.forEach(num =>
            {
                num.classList.remove('number-show');
            });
        }
    })
};
showSkillsMobile();

//no picture dragging
window.ondragstart = function()
{ 
    return false; 
};
