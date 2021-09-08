
const bar = document.querySelector('.bars');
const Both = document.querySelector('.both');

bar.addEventListener('click', () => {
    if (Both.style.display === 'block'){
        Both.style.display = 'none'
    }
    else{
        Both.style.display = 'block'
    }
})
