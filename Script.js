 // script.js
function changeText() {
  const welcomeText = document.getElementById("welcome-text");
  const button = document.getElementById("change-text-btn");
  
  // Change text content
  welcomeText.innerText = "JavaScript is Dynamic and Fun!";
  
  // Add a pulsating animation
  welcomeText.classList.add("pulse-animation");
  
  // Change button color randomly
  button.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const quotes = [
    "Life is short. Smile while you still have teeth!",
    "Life is like a sandwich; you have to fill it with the best ingredients.",
    "I'm not arguing; I'm just explaining why I'm right.",
    "To all those who closed their doors onm me, I'm coming back to buy the building .",
    "When life gives you lemon , make lemonade. ",
    "Behind every great man is a woman rolling her eyes.",
    "Life is what happens when you're busy making other plans... and forgetting where you parked!",
    "Remember, today is the tomorrow you worried about yesterday.",
    "Life is like a bicycle. To keep your balance, you must keep moving."
  ];

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }

  document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme in local storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggleButton.textContent = savedTheme === "dark-mode" ? "Switch to Light Mode" : "Switch to Dark Mode";
    }

    themeToggleButton.addEventListener("click", () => {
        // Toggle between light-mode and dark-mode classes
        if (body.classList.contains("light-mode")) {
            body.classList.replace("light-mode", "dark-mode");
            themeToggleButton.textContent = "Switch to Light Mode";
            localStorage.setItem("theme", "dark-mode");
        } else {
            body.classList.replace("dark-mode", "light-mode");
            themeToggleButton.textContent = "Switch to Dark Mode";
            localStorage.setItem("theme", "light-mode");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("sound-button");

  // Create an audio object and load the sound file
  const clickSound = new Audio("html codes/buttonsound/click-sound.mp3");

  // Play the sound when the button is clicked
  button.addEventListener("click", () => {
      clickSound.play();
  });
});
