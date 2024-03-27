let grid = document.getElementById ("grid");

function fillGrid () {
    for (let i = 0; i < 256 ; i++) {
        let newDiv = document.createElement ("div");
        newDiv.className = "gridBox";
        newDiv.textContent= "16"
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
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.left = x + "px";
        pixel.style.top = y + "px";
        container.appendChild(pixel);

        setTimeout(function() {
            pixel.style.opacity = 0;
            setTimeout(function() {
                pixel.remove();
            }, 300);
        }, 1000);
    }
});