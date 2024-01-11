const grid = document.getElementsByClassName("game");

for(let i = 0; i<25; i++){
    
    let cell = document.createElement("div");
    cell.classList.add("cell");

    grid[0].appendChild(cell);
}

let cellCounter = 1;
document.addEventListener("keydown", event => {
    if(event.keyCode >=65 && event.keyCode <= 122){
        grid[0].children[cellCounter].innerHTML = event.key;
        cellCounter++;
    }
    if(event.keyCode === 9){
        
    }
})