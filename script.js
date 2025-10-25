const helpBtn = document.getElementById("help-btn");
const chatbox = document.getElementById("chatbox");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const messages = document.getElementById("messages");

// Predefined responses
const botResponses = {
  "hello": "Hi there! How can I help you today?",
  "how are you": "I'm just a bot, but I'm doing great! 😎",
  "game": "You can download the game from the 'Download Game' button on the homepage.",
  "help": "Sure! Ask me anything related to the website or game.",
  "default": "Sorry, I didn't understand that. Try asking something else."
};

// Toggle chatbox
helpBtn.addEventListener("click", () => {
  chatbox.style.display = chatbox.style.display === "block" ? "none" : "block";
});

// Send message
sendBtn.addEventListener("click", handleMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleMessage();
});

function handleMessage() {
  const msg = userInput.value.trim().toLowerCase();
  if (!msg) return;

  // Show user message
  messages.innerHTML += `<div><b>You:</b> ${userInput.value}</div>`;
  userInput.value = "";

  // Check predefined responses
  let reply = botResponses["default"];
  for (let key in botResponses) {
    if (msg.includes(key)) {
      reply = botResponses[key];
      break;
    }
  }

  // Show bot reply
  messages.innerHTML += `<div><b>Bot:</b> ${reply}</div>`;
  messages.scrollTop = messages.scrollHeight;
}
