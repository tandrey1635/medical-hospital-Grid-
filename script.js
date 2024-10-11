// бургер меню
const burger = document.querySelector('.burger__menu')
const burgerLine = document.querySelectorAll('.burger__line')
const headerMenuMobile = document.querySelector('.header__bottom')



burger.addEventListener('click', ()=>{
    headerMenuMobile.classList.toggle('header__active')
    burgerLine[0].classList.toggle('burger__line-minus45deg')
    burgerLine[2].classList.toggle('burger__line_45deg')
    burgerLine[1].classList.toggle('burger__line-dnone')
    if (headerMenuMobile.classList.contains('header__active')) {
        document.body.style.overflow = 'hidden'
    }
    else{
        document.body.style.overflow = ''
    }
})


// аккордеон
const accordeon = document.querySelectorAll('.work__service')
const accordeonSubtitle = document.querySelectorAll('.work__subtitle-right')
const accordeonText = document.querySelectorAll('.section__description')

accordeon.forEach(accordeon=>{
    accordeon.addEventListener('click', ()=>{
        accordeon.classList.toggle('active')
        accordeon.nextElementSibling.classList.toggle('text-noactive')
        accordeon.lastElementChild.classList.toggle('work__subtitle-right_active')
    })
})



// плавная прокрутка 
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    if (headerMenuMobile.classList.contains('header__active')) {
        document.body.style.overflow = ''
        headerMenuMobile.classList.remove('header__active')
        burgerLine[0].classList.remove('burger__line-minus45deg')
        burgerLine[2].classList.remove('burger__line_45deg')
        burgerLine[1].classList.remove('burger__line-dnone')
    }
   
  })
  
}

// стрелка вверх
const arrowUp = document.querySelector('.arrow__up')

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset >= 200) {
        arrowUp.classList.add('arrow__active')
    }
    else{
        arrowUp.classList.remove('arrow__active')
    }
})

arrowUp.addEventListener('click', ()=>{
    window.scrollTo(
        { top: 0, behavior: 'smooth' }
    );
})
