
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list')
const shLine = document.querySelector('.sh-line');
const lgLine1 = document.querySelector('.lg-line1');
const lgLine2 = document.querySelector('.lg-line2');
const arrow = document.querySelector('.arrow');
const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('.nav-link')
const days = document.querySelectorAll('.day');
const Fields = document.querySelectorAll('.dayFeild ')
const displayedDay = document.querySelector('#monday')

window.addEventListener('resize' , checkNavBar)
window.addEventListener('scroll' , scrolling)
hamburger.addEventListener('click' , openCloseNavBar )
days.forEach(day=> day.addEventListener('click' , displayTime))

function openCloseNavBar(){
    hamburger.classList.toggle('close');

    shLine.classList.toggle('opened')
    lgLine1.classList.toggle('opened')
    lgLine2.classList.toggle('opened')
    if(!hamburger.classList.contains('close')){
        navList.style.height = '300px'
        navList.style.opacity = '1'
    }else{
        navList.style.height= '0px'
        navList.style.opacity = '0'
    }
}

function scrolling(){
    if(window.scrollY>200){
        arrow.classList.remove('disappear');
    }else{
        arrow.classList.add('disappear')
    }
}

function checkNavBar(){
    if(window.innerWidth>=900){
        navList.style.height = '70px'
        navList.style.opacity = '1'
    }else{
        navList.style.height= '0px'
        navList.style.opacity = '0'
    }
}



window.onscroll = () => {
    let current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop ) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      li.classList.remove("current");
      if (li.href.includes(current)) {
        li.classList.add('current');
        }
    });
  };


function displayTime(e){
    days.forEach(day=>day.classList.remove('current'))
    e.target.classList.add('current');
    const day = e.target.id;
    Fields.forEach(feild => {
        if(feild.classList.contains(day)){
            feild.textContent="12:00PM => 3:30PM"
        }else{
            feild.textContent = ''
        }
    })
}


displayedDay.click()