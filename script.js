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
            div.style.backgroundColor = `pink`;
        });
    });
}

// random button
const random = document.querySelector(`#random`)
random.addEventListener ('click', () =>{
    const divs = document.querySelectorAll('.conts');
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            const [r, g, b] = randomColor();
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            console.log (randomColor())
        });
    });
})

// reset button
const reset = document.querySelector('#reset');
reset.addEventListener('click', () =>{
    const divs = document.querySelectorAll('.conts');
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `pink`;
        });
    });
})



// placeholder grid
createDivs(100);
addHoverEventListeners();

// Remove divs function
function removeDivs() {
    const divs = document.querySelectorAll('.conts');
    divs.forEach(div => {
        container.removeChild(div);
    });
}

// Random integer function
function randomInteger(max){
    return Math.floor(Math.random() * (max + 1))

}

// Random color function
function randomColor (){
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b]
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

// Grid Change Calculations function
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
