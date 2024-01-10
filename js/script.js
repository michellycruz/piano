const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher')

const playNote = (note) => {
const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) =>{

    playNote(key.getAttribute('data-note'));

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


checkbox.addEventListener('change', ({ target }) => {
    if(target.checked){
        switcher.classList.add('switcher--active');
        return
    }

    switcher.classList.remove('switcher--active');
})

