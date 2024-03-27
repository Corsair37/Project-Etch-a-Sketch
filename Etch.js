let grid = document.getElementById ("grid");

function fillGrid () {
    for (let i = 0; i < 256 ; i++) {
        let newDiv = document.createElement ("div");
        grid.appendChild (newDiv)
        return grid
    }

}

let filledGrid = fillGrid();