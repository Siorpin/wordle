const grid = document.getElementsByClassName("game");

for(let i = 0; i<25; i++){
    
    let cell = document.createElement("div");
    cell.classList.add("cell");

    grid[0].appendChild(cell);
}
