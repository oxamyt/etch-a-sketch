// container
const container = document.querySelector('#container');

// function to create divs
function createDivs(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div'); 
        div.classList.add('conts');
        container.appendChild(div);
    }
}

// Hover event
function addHoverEventListeners() {
    const divs = document.querySelectorAll('.conts');
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'pink';
        });
    });
}

createDivs(100);
addHoverEventListeners();

// Remove divs function
function removeDivs() {
    const divs = document.querySelectorAll('.conts');
    divs.forEach(div => {
        container.removeChild(div);
    });
}

// Button event
const button = document.querySelector('#change');
button.addEventListener('click', () => {
    const ask = prompt('How big do you want the grid to be? (1-100)');
    if (ask < 100){
        removeDivs();
        createDivs(ask * ask);
        addHoverEventListeners(); 
        gridCalc(ask);
    }
    else  {
        alert('Please, input 1-100')
    }
});

function gridCalc(ask) {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    let divheight = containerHeight / ask;
    let divwidth = containerWidth / ask;

    const divs = document.querySelectorAll('.conts'); 
    divs.forEach(div => {
        div.style.width = `${divwidth}px`;
        div.style.height = `${divheight}px`;
    });
}
