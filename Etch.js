let grid = document.getElementById ("grid");

function fillGrid () {
    for (let i = 0; i < 256 ; i++) {
        let newDiv = document.createElement ("div");
        newDiv.className = "gridBox";
        newDiv.textContent= "  "
        grid.appendChild (newDiv)
    } return grid

}

let filledGrid = fillGrid();


document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("grid");

    container.addEventListener("mousemove", function(event) {
        createPixel(event.pageX, event.pageY);
    });

    function createPixel(x, y) {

        let rect = container.getBoundingClientRect ();
        let pixelX = x - rect.left;
        let pixelY = y - rect.top;

        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.left = pixelX + "px";
        pixel.style.top = pixelY + "px";
        container.appendChild(pixel);

        setTimeout(function() {
            pixel.style.opacity = 0;
            setTimeout(function() {
                pixel.remove();
            }, 300);
        }, 1000);
    }
});


    let oldGrid = document.querySelectorAll(".gridBox");
    let replaceGrid = document.getElementById("newGrid");
    replaceGrid.addEventListener("click", () => {

        for (let i = 0; i < oldGrid.length; i++) {
            oldGrid[i].remove();
        }
        
        let numBoxes = prompt("How many boxes would you like?");
        if (numBoxes > 0) {
            for (let i = 0; i < numBoxes; i++) {
                let newDiv = document.createElement("div");
                newDiv.className = "gridBox";
                newDiv.textContent = "  ";
                grid.appendChild(newDiv);
            } return grid
        }
    });

