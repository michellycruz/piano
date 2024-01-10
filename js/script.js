const keys = document.querySelectorAll('.key');


const handleMouseDown = (key) =>{

    if(key.className.includes('black')){
        return;
    }

    key.style.background = '#ddd';
}

const handleMouseUp = (key) =>{
    key.style.background = 'white';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
})

keys.forEach((key) => {
    key.addEventListener('mouseup', () => handleMouseUp(key))
})