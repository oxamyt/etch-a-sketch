// container
const container = document.querySelector('#container');

// grid function
function createDivs(numDivs){
    for (let i = 0; i < numDivs; i++){
        let divs = document.createElement('div');
        divs.classList.add('conts')
        container.appendChild(divs);
        
    }
}
createDivs(256);

// hovering event
const divs = document.querySelectorAll('.conts');
divs.forEach(div  => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'pink';
    })
    }
)

// button event
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const ask = prompt('How big you want grid to be? (1-100)')
})

