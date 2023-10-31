





const btnsidebar  = document.querySelector('.btn');

btnsidebar.addEventListener('click' , ()=>{
    if (btnsidebar.innerHTML == 'Follow')
    btnsidebar.innerHTML = "Following";
    else
    btnsidebar.innerHTML = "Follow";
})
