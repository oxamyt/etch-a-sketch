const container = document.querySelector('#container');

function createDivs(numDivs){
    for (let i = 0; i < numDivs; i++){
        let divs = document.createElement('div');
        container.appendChild(divs);
    }
}
createDivs(256);
