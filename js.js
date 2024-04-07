import Swal from 'sweetalert2';

const yes = document.getElementById('yes');
const no = document.getElementById('no');
const bg = document.getElementById('bg');
const congrats = document.getElementById('congrats');
const not = document.getElementById('not');

yes.addEventListener('click',() => {
    Swal.fire({
        title:"Selamat Kamu Gay🗿",
        icon:"success",
        iconColor:'pink',
        showConfirmButton:false,
        timer:3000
    });
    setTimeout(() => {
        bg.style.display = 'none'
        congrats.style.display = 'flex'
    },3000)
})

let press = 0;
no.addEventListener('mousedown',() => {
    if(press < 100){
    const x = Math.floor(Math.random() * window.innerWidth/1.6);
    const y = Math.floor(Math.random() * window.innerHeight/1.6);
    no.style.top = `${y}px `;
    no.style.right = `${x}px`;
    }else{
        bg.style.display = 'none';
        not.style.display = 'flex'
        press = 0;
    }
})

no.addEventListener('mouseout',() => {
    press++;
})