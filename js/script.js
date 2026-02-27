// JavaScript to handle sending and receiving messages
const sendButton = document.getElementById("sendButton");
const userMessageInput = document.getElementById("userMessage");
const chatMessages = document.getElementById("chatMessages");

sendButton.addEventListener("click", async () => {
    const userMessage = userMessageInput.value;
    if (!userMessage.trim()) return;

    // Display user message in chat
    chatMessages.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
    userMessageInput.value = "";  // Clear the input field

    // Send the user message to the backend (server)
    const response = await fetch("https://your-railway-deployment-url/api/chat", {  // Replace with your Railway app URL
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userMessage }),
    });

    const data = await response.json();

    // Display bot response
    if (data.response) {
        chatMessages.innerHTML += `<div><strong>Bot:</strong> ${data.response}</div>`;
    } else {
        chatMessages.innerHTML += `<div><strong>Bot:</strong> Sorry, there was an error. Please try again.</div>`;
    }

    // Scroll to the bottom to keep chat view updated
    chatMessages.scrollTop = chatMessages.scrollHeight;
});
