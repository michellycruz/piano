const keys = document.querySelectorAll('.key');


const handleClick = (key) =>{
    key.style.background = '#ddd';
}

keys.forEach((key) => {
    key.addEventListener('click', () => handleClick(key))
})