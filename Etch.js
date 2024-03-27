let grid = document.getElementById ("grid");

function fillGrid () {
    for (let i = 0; i < 256 ; i++) {
        let newDiv = document.createElement ("div");
        newDiv.className = "gridBox";
        newDiv.textContent= ""
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

function replaceGrid() {
    let numBoxes = prompt("How many boxes would you like?");
    
    if (numBoxes && !isNaN(numBoxes) && parseInt(numBoxes) > 0) {
        let grid = document.getElementById("grid");

        let gridBoxes = grid.querySelectorAll('.gridBox');
        gridBoxes.forEach(function(box) {
            box.remove();
        })
        
        for (let i = 0; i < parseInt(numBoxes); i++) {
            let newDiv = document.createElement("div");
            newDiv.className = "gridBox";
            newDiv.textContent = "  ";
            grid.appendChild(newDiv);
        }
    } else {
        alert("Please enter a valid number of boxes.");
    }
}
