const grid = document.getElementsByClassName("game");
let words = ["konto", "fotka", "cytat", "pokaż", "tylko", "marek", "temat", "kości", "głowa", "wyraz", "sklep", "tosty", "cudna", "cudny", "nudny", "agata", "kubek",
"nożyk", "łożko", "czapa", "drzwi", "zegar","kreda","oczko","taśma","wafel","fotka","ramka","karta","kwiat","baton","trawa","sufit","lampa","ogień","balon","okrąg","żabka",
"ząbki","sonia","monia","magda","jedza", "kopiuj","obróć","super","serek","linki","filmy","dodaj","łyżka","szafa","mięso","obraz","schód","oceny","ferie","smaki","język",
"włosy","liter","pliki","wieża","długo","kocha","zrobi","usług","sobie","Konie","Krowa","płyta","Gumka","Lampa","Leżak","Picie","Kwiat","Drzwi","Mleko","Salsa","pasek","korek",
"Fanta","Banan","Piłka","Morze","Rower","serce","konto","fotka","cytat","pokaż","tylko","marek","temat","kości","głowa","wyraz","sklep","tosty","cudna","cudny","nudny","ząbki",
"kubek","agata","żabka","nożyk","zegar","kicia","wolny","pudło","płyta","kotek","deska","konik","ławka","szyba","życie","świat","niebo","dzień","pasja","mocno","słowa","posty",
"dział","grafy","temat","autor","magda","kreda","oczko","taśma","wafel","ramka","karta","kwiat","baton","trawa","sufit","lampa","ogień","balon","okrąg","kasia","konto","cytat",
"pokaż","marek","kości","głowa","wyraz","sklep","tosty","cudna","cudny","nudny","brudny","agata","kubek","nożyk","łożko","drzwi","zegar","chyba","klasa","worek","sledź","kwiat",
"obraz","kabel","ramka","ogród","kreda","sufit","lampa","ogień","balon","okrąg","żabka","ząbki","budka","żurek","kabel","nauka","karma","kefir","polak","szafa","konie","żabki",
"kluby","komin","lilia","świat","słowa","laski","życie","atlas","komar","sosna","czapa","wanda","górka","babka","droga","miska","domek","autko","busik","linia","gośka","paski",
"dachy","kremy","tarka","plony","jamki","ulica","czapa","irysy","lampa","Beata","lisek","pajac","płyta","Paula","ragga","gogle","łezka","wiatr","ferie","oceny","chyła","lanie",
"honor","babka","zegar","szafa","motyl","fotka","tubka","patyk","tarło","gosia","sklep","masło","miara","rosół","serce","wiara","konik","suseł","wieko","czeki","worek", "rybka",
"piłka"];
let winningWord;
let userWord = "";
let attempt = 1;
let checkable = false;

startGame();

function startGame(){
    rollWord();

for(let i = 0; i<25; i++){
    
    let cell = document.createElement("div");
    cell.classList.add("cell");

    grid[0].appendChild(cell);
}

let cellCounter = 1;

document.addEventListener("keydown", e =>{
    if(e.key === "Enter" && checkable){
        decorateCells();
        document.removeEventListener("keydown", e);
    }
})

document.addEventListener("keydown", event => {
    if(event.keyCode >=65 && event.keyCode <= 122){
        grid[0].children[cellCounter].innerHTML = event.key.toUpperCase();
        userWord += event.key.toUpperCase();
        cellCounter++;
        checkable = false;
    }
    else if(event.key === "Backspace"){
        if(cellCounter > attempt && grid[0].children[cellCounter].innerHTML == ""){
            grid[0].children[--cellCounter].innerHTML = "";
            userWord = userWord.slice(0,-1);
        } 
        else if(cellCounter > attempt){
            grid[0].children[cellCounter].innerHTML = "";
        }
    }
    checkWord(userWord.length, event.key);
    
})
}

function checkWord(counter, key){
    if(counter%5 == 0 && counter != 0){
        if(words.includes(userWord.toLowerCase())){
            checkable = true;
        }
        else{
            userWord = userWord.slice(0,-1);
            cellCounter--;
        }
    }
}

function rollWord(){
    let index = Math.round(Math.random() * words.length);
    winningWord = words[index].toUpperCase();
}

async function decorateCells(){
    for(let i=0; i<5; i++){
        grid[0].children[i+attempt].classList.add("animate");
        if(winningWord[i] == userWord[i]){
            grid[0].children[i+attempt].style.backgroundColor = "green";
        }
        else if(winningWord.indexOf(userWord[i]) != -1){
            grid[0].children[i+attempt].style.backgroundColor = "orange";
        }
        await sleep(500);
    }

    attempt+=5;
    
    if(winningWord === userWord){
        winner();
    }
    userWord = "";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function winner(){
    let winnerWindow = document.createElement("div");
    winnerWindow.classList.add("winnerWindow");
    winnerWindow.innerHTML = "Wygrałeś!";

    document.getElementById("main").appendChild(winnerWindow);
}

