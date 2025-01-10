let containerHeight = 500; 
let containerWidth = 500; 
let dimension = Number(prompt("Enter number of squares per row!")); 
const container = document.querySelector(".container");

function createGrid(dimension) { 
    // create the desired square div and set correct height and width and border
    const square = document.createElement("span"); 
    square.setAttribute("style", 
                        `height: ${500/dimension}; 
                        width: ${500/dimension}; 
                        border: solid black;`)

    // now create a grid of dimension x dimension square divs 
    for (let i=0; i<dimension*dimension; i++) { 
        container.appendChild(square); 
    }
}

createGrid(dimension); 