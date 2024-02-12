const gridContainer = document.querySelector('.gridcontainer');
let count = 0;
for (let i = 0; i <= 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(square);
        count += 1;
    }
}

function changeColor(evt) {
    const square = evt.target;
    square.style.backgroundColor = 'black';
}