


const btnleft = document.querySelector('#btnleft');
const btnright = document.querySelector('#btnright');
const sliders = document.querySelectorAll('.slider');

const nextSlide = () => {

    const currnt = document.querySelector('.open');

    currnt.classList.remove('open');

    if(currnt.nextElementSibling){
        currnt.nextElementSibling.classList.add('open')
    }else{
        sliders[0].classList.add('open')
    }
   setTimeout(() => currnt.classList.remove('open'))
}

const nextprv = () => {

    const currnt = document.querySelector('.open');

    currnt.classList.remove('open');

    if(currnt.previousElementSibling){
        currnt.previousElementSibling.classList.add('open')
    }else{
        sliders[sliders.length-1].classList.add('open')
    }
    setTimeout(() => currnt.classList.remove('open'))
}



btnleft.addEventListener('click' , (e) => {
    nextprv();
    if(true){
        let sliderintrvl;
        clearInterval(sliderintrvl);
         sliderintrvl = setInterval(() => {
            nextprv();
        }, 5000);
    }
})
btnright.addEventListener('click' , (e) => {
    nextSlide();
    if(false){
        let sliderintrvl;
        clearInterval(sliderintrvl);
         sliderintrvl = setInterval(() => {
            nextprv();
        }, 5000);
    }
})


if(true){
    let sliderintrvl = setInterval(() => {
        nextprv();
    }, 5000);
}