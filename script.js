// game start tic tac toe
const gameAbtn = document.getElementById("game-name");
const gameAcross = document.getElementById("game-id-btn");
const gameAbutton = document.getElementById("gameA");

gameAbtn.addEventListener('click', () => {
  gameAbutton.style.display = 'block';
});
gameAcross.addEventListener('click', () => {
  gameAbutton.style.display = 'none';
});
// game ends tic tac toe 

// game1 start 
  
const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const restartBtn = document.getElementById("restartBtn");
let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle cell click
function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = cell.getAttribute("data-index");

    if (boardState[cellIndex] !== "" || !gameActive) {
        return;
    }

    boardState[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;

    checkWin();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Function to check for a win or draw
function checkWin() {
    let roundWon = false;

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        alert(`${currentPlayer} wins!`);
        gameActive = false;
        return;
    }

    if (!boardState.includes("")) {
        alert("It's a draw!");
        gameActive = false;
    }
}

// Function to reset the game
function restartGame() {
    boardState = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    cells.forEach(cell => (cell.textContent = ""));
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
restartBtn.addEventListener("click", restartGame);

// game1 ends 


const home = document.getElementById('home');
const icon1 = document.getElementById('icon1');
const homebtn = document.getElementById('home-btn');
const icon2 = document.getElementById('icon2');
const about = document.getElementById('about');
const aboutbtn = document.getElementById('about-btn');
let zIndexCounter = 1;
homebtn.addEventListener('click',function() {
  home.style.display = "none";
  
})
icon1.addEventListener('dblclick', function() {
  home.style.display = "block";
  zIndexCounter++;
  home.style.zIndex = zIndexCounter; // Apply updated z-index to the "home" div
});

// Event listener for icon2
icon2.addEventListener('dblclick', function() {
  about.style.display = "block";
  zIndexCounter++;
  about.style.zIndex = zIndexCounter; // Apply updated z-index to the "about" div
});
aboutbtn.addEventListener('click',function() {
  about.style.display = "none";
  
})

// dragable divs home
const draggableDiv = document.getElementById("home");
let offsetX, offsetY; // Variables to store the offset of the mouse within the div
let isDragging = false; // Boolean to track whether dragging is active

// Mouse down event to start dragging
draggableDiv.addEventListener("mousedown", (e) => {
    isDragging = true; // Set dragging to true
    offsetX = e.clientX - draggableDiv.offsetLeft; // Calculate initial offset
    offsetY = e.clientY - draggableDiv.offsetTop;
    draggableDiv.style.cursor = "grabbing"; // Change cursor style while dragging
});

// Mouse move event to drag the div
document.addEventListener("mousemove", (e) => {
    if (isDragging) { // Only move the div if dragging is active
        draggableDiv.style.left = e.clientX - offsetX + "px";
        draggableDiv.style.top = e.clientY - offsetY + "px";
    }
});

// Mouse up event to stop dragging
document.addEventListener("mouseup", () => {
    isDragging = false; // Stop dragging
    draggableDiv.style.cursor = "grab"; // Reset cursor style
});

// dragable end home

// draggable about start
const movableElement = document.getElementById("about");
let initialMouseX, initialMouseY;
let currentElementX = 100;
let currentElementY = 100;
let draggingActive = false;

movableElement.addEventListener("mousedown", function(event) {
    draggingActive = true;
    initialMouseX = event.clientX - currentElementX;
    initialMouseY = event.clientY - currentElementY;
    movableElement.style.cursor = "grabbing";
});

document.addEventListener("mousemove", function(event) {
    if (draggingActive) {
        currentElementX = event.clientX - initialMouseX;
        currentElementY = event.clientY - initialMouseY;
        
        const maxX = window.innerWidth - movableElement.offsetWidth;
        const maxY = window.innerHeight - movableElement.offsetHeight;
        currentElementX = Math.max(0, Math.min(currentElementX, maxX));
        currentElementY = Math.max(0, Math.min(currentElementY, maxY));

        movableElement.style.left = currentElementX + "px";
        movableElement.style.top = currentElementY + "px";
    }
});

document.addEventListener("mouseup", function() {
    draggingActive = false;
    movableElement.style.cursor = "grab";
});

movableElement.addEventListener("dragstart", function(event) {
    event.preventDefault();
});
// dragable about end 

function toggleDiv() {
  // Get the div element
  const div = document.getElementById("start-menu");
  if (div.style.display === "none" || div.style.display === "") {
      div.style.display = "block";
  } else {
      div.style.display = "none"; // Hide again
  }
}

   // full screen 
   const myDoc = document.documentElement;
   const btn = document.getElementById('btn-full');
   const body = document.getElementById('body');
   btn.addEventListener('click', () => {
     if(btn.textContent === "Click Hear For Better Experience"){
       myDoc.requestFullscreen();
       btn.textContent = "Exit";
     }else{
       document.exitFullscreen();
       btn.textContent = "Click Hear For Better Experience";
     }
   });

// clock 
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Set time elements
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Call updateTime every second
setInterval(updateTime, 1000);
// Initial call to display the time immediately
updateTime();



   

    // analog watch 
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
    const digitalDisplay = document.getElementById('digital-display');

    function setClock() {
      const now = new Date();
      
      // Calculate degree rotations for each hand
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const minutes = now.getMinutes();
      const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

      const hours = now.getHours();
      const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

      // Update digital display
      const formattedTime = now.toLocaleTimeString();
      digitalDisplay.textContent = formattedTime;
    }

   
    setInterval(setClock, 1000);
    setClock();

 

    // start-menu 
    const startMenu = document.querySelector("#start-menu");
    const startbtn = document.querySelector("#start-btn");

    startbtn.addEventListener('click', () => { 
      if (startMenu.style.visibility === "hidden") {
        startMenu.style.visibility = "visible";
      } else {
        startMenu.style.visibility = "hidden";
      }
      
    });
    gsap.from("#start-menu",{
      opacity: 0,
      x:400,
      duration: 0.5,
    });

    