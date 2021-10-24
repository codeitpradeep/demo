const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const grdients = document.querySelectorAll('.grdient')
 

let prevcolor = "blue";
let animationEnd = true




function changeSize(){
    sizes.forEach(size => size.classList.remove('active') );
    this.classList.add('active')
}

function changeColor(){
    if(!animationEnd) return;  
    let primary = this.getAttribute('primary')
    console.log(primary)
    let color = this.getAttribute('color')
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let grdient= document.querySelector(`.grdient[color="${color}"]`)
    let prevGradient= document.querySelector(`.grdient[color="${prevcolor}"]`)



    colors.forEach(c => c.classList.remove('active'))
    this.classList.add('active')

    document.documentElement.style.setProperty('--primary', primary)

    shoes.forEach(s => s.classList.remove('show'))
    shoe.classList.add('show')

    grdients.forEach(g => g.classList.remove('first', 'second'));
    grdient.classList.add('first');
    prevGradient.classList.add('second')

    prevcolor= color; 
    animationEnd =false;

    grdient.addEventListener('animationend', () => {
        animationEnd = true;
    })


}



sizes.forEach(size => size.addEventListener('click', changeSize))
colors.forEach(c => c.addEventListener('click' , changeColor))

const showbg = document.querySelector('.showbackground');

let x = window.matchMedia("(max-width: 1000px)")


function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        console.log(shoeHeight)
        showbg.style.height = `${shoeHeight * 0.9}px`
    }
    else{
        showbg.style.height="475px"
    }
}

changeHeight();

window.addEventListener('resize', changeHeight)
