let containerHeight = 500; 
let containerWidth = 500; 
let dimension = Number(prompt("Enter number of squares per row!")); 
const container = document.querySelector(".container");

function createGrid(dimension) { 
    // now create a grid of dimension x dimension square divs 
    for (let i=0; i<dimension*dimension; i++) { 
        // create the desired square div and set correct height and width and border
        const square = document.createElement("div"); 
        square.setAttribute("style", `height: ${500/dimension}px; 
                            width: ${500/dimension}px; 
                            border: 0.1px solid black;`)

        square.classList.add("cell"); 
        container.appendChild(square); 
    }
}

createGrid(dimension); 