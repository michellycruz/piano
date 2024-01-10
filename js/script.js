const keys = document.querySelectorAll('.key');
const playNote = (note) => {
    const audio = new Audio('../notes/1.wav');
    audio.play();
}

const handleMouseDown = (key) =>{

    playNote()

    if(key.className.includes('black')){
        key.classList.add('black--pressed')
        return;
    }

    key.style.background = '#ddd';
}

const handleMouseUp = (key) =>{

    if(key.className.includes('black')){
        key.classList.remove('black--pressed')
        return;
    }

    key.style.background = 'white';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
})

keys.forEach((key) => {
    key.addEventListener('mouseup', () => handleMouseUp(key))
})