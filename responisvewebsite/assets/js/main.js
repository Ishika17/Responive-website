/*=============== SEARCH ===============*/

const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
     searchContent = document.getElementById('search-content')

    //  Menu hidden

// validate if constant exist
if(searchButton){
    searchButton.addEventListener('click' ,  () =>{
        searchContent.classList.add('show-search')
    })
}
// menu hidden
// validate if event close
if(searchClose){
    searchClose.addEventListener('click' ,  () =>{
       searchContent.classList.remove('show-search')
    })
}

// login page 
const loginButton = document.getElementById('login-button'),
   loginClose = document.getElementById('login-close'),
   loginContent = document.getElementById('login-content')

    //  Menu hidden
// login show
// validate if constant exist
if(loginButton){
    loginButton.addEventListener('click' ,  () =>{
       loginContent.classList.add('show-login')
    })
}
// menu hidden
// validate if event close
if(loginClose){
    loginClose.addEventListener('click' ,  () =>{
       loginContent.classList.remove('show-login')
    })
}

// /Add shadow header
const shadowHeader = () => {
    
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll' , shadowHeader)


// home swipper

let swiperHome = new Swiper('.home_swiper' , {
    loop : true,
    spaceBetween : -24 ,
    grabCursor :true ,
    slidesPerView : 'auto' , 
    centeredSlides : 'auto', 

    autoplay: {
        delay:3000,
        disableOnInteraction: false,

    }, 
    breakpoints:{
        1220:{
            spaceBetween: -32,
        }
    }
})
// featured swiper////////////////////////////
let swiperFeatured = new Swiper('.featured_swiper', {
    loop : true,
    spaceBetween : 16 ,
    grabCursor :true ,
    slidesPerView : 'auto' , 
    centeredSlides : 'auto',
    
    navigation: {
        nextEL : '.swiper-button-next',
        prevEL : '.swiper-button-prev',
    },
    
    breakpoints:{
        1150:{
          slidesPerView: 4,
          centeredSlides: false , 
        }
    }
})


// new bookd


let swiperNew = new Swiper('.new_swiper', {
    loop: true,
    spaceBetween : 16 ,
   slidesPerView : 'auto' , 
  
    breakpoints: {
        1150: {
          slidesPerview: 2,
        //   centeredSlides: false , 
        }
    }
})

// testimonial//////////////////
let swipertesti = new Swiper('.testimonial_swiper' , {
    loop : true,
    spaceBetween : 16 ,
    grabCursor :true ,
    slidesPerView : 'auto' , 
    centeredSlides : 'auto',
    
    

 breakpoints :{
        1150:{
          slidesPerview: 3,
          centeredSlides: false , 
        }
    }
})

// scroll up////////////////////////////////////////////
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollUp)
// scroll section active link

const sections = document.querySelectorAll('section[id')
const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav_menu  a[href*= ' + sectionId + ']')
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
// change colors
const themeBUtton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtrain the current theme that the interface has by vcalidating by dark theme 

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeBUtton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the user previously chose a topic

if(selectedTheme){
    // if the validation s fulfiiled , we ask the what the issue was to knoe
    document.body.classList[selectedTheme === 'dark' ? 'add' :'remove'](darkTheme)
    themeBUtton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeBUtton.addEventListener('click' , () => {
    document.body.classList.toggle(darkTheme)
    themeBUtton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme' , getCurrentTheme())
    localStorage.setItem('selected-icon' , getCurrentIcon())

})
const sr = ScrollReveal({
    origin : 'top',
    distance: '60px' ,
    duration: 2500 ,
    delay: 400,
    // reset: true ,
    // animation

})
sr.reveal(`.home_data , .featured_container, .new_container , .join_data , .testimonial_container , .footer` )
// sr.reveal(`.home_images`, {interval: 100})
sr.reveal(`.services_card`, {interval: 100})
sr.reveal(`.discount_data`, {origin: 'left'})
sr.reveal(`.discount_images`, {origin: 'right'})

