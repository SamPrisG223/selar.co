const toggleArrow = document.getElementById('learner');
const subList = document.getElementsByClassName('sublist')[0]
const fontUp = document.querySelector('#learnicon')
toggleArrow.addEventListener('click', () => {
   if ( subList.style.display === 'block'){
    subList.style.display = 'none';
    
    
   }
    else{
        subList.style.display = 'block'
        fontUp.style.transform = 'rotate(180deg)';
    }
})

fontUp.addEventListener('click', () =>{
    fontUp.style.transform = 'rotate(180deg)';
})