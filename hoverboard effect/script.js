const container = document.getElementById('container');
const colors = ['#e74c3d', '#8e44ad', '#3498da', '#e67e25', '#2fecc71']
const SQUARES = 400;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColour(square));
    
    square.addEventListener('mouseout', () => removeColour(square));

    container.appendChild(square);
}

function setColour(element) {
    const color = getRandomColour();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}


function removeColour(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColour() {
    return colors[Math.floor(Math.random() * colors.length)]
}