
const inputs = document.querySelectorAll(".input");


function focusfunc(){
    let parent = this.parentNode;
    parent.classList.add('focus')
}

function blurfunc(){
    let parent = this.parentNode;
    if(this.value===''){
        parent.classList.remove('focus');
    }
   
}


inputs.forEach((input) => {
    input.addEventListener('focus' , focusfunc);
   input.addEventListener('blur', blurfunc)
});
