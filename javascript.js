let containerHeight = 500; 
let containerWidth = 500; 
let dimension = Number(prompt("Enter number of squares per row!")); 
const container = document.querySelector(".container");

const button = document.querySelector("button"); 
button.addEventListener("click", () => { 
    clearGrid(); 
    createGrid(parseInt(prompt("Enter number of squares per row!"))); 
})


function clearGrid() { 
    const squares = document.querySelectorAll(".cell")
    squares.forEach((square) => { 
        container.removeChild(square); 
    })
}

function createGrid(dimension) { 
    // now create a grid of dimension x dimension square divs 
    for (let i=0; i<dimension*dimension; i++) { 
        // create the desired square div and set correct height and width and border
        const square = document.createElement("div"); 
        square.setAttribute("style", `height: ${900/dimension}px; 
                            width: ${900/dimension}px; 
                            border: 0.1px solid black;`)
        // add a hover event listener to change colour 
        square.addEventListener("mouseover", () => { 
            square.style.backgroundColor = "black"; 
        })

        square.classList.add("cell"); 
        container.appendChild(square); 
    }
}


createGrid(dimension); 