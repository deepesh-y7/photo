
const navToggle = document.querySelector('.nav-toggle');

const ulList = document.querySelector('.nav-link');

navToggle.addEventListener('click' , ()=>{

    ulList.classList.toggle('ul-active');
    
    let openClose = navToggle.firstElementChild;
    
    if(ulList.classList.contains('ul-active')){
        openClose.classList.replace('ri-menu-line','ri-close-line')
    }else{
        openClose.classList.replace('ri-close-line','ri-menu-line')
    }
    
})


