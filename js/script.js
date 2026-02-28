// Initialize Lucide icons
lucide.createIcons();

const input = document.getElementById('ai-search');
const sendBtn = document.getElementById('send-trigger');
const micBtn = document.querySelector('.mic-btn');

const API_URL = "https://pah-ai-server-production.up.railway.app/api/chat"; // Change if needed

// ============================
// SEND MESSAGE FUNCTION
// ============================
const handleSearch = async () => {
    const query = input.value.trim();
    if (!query) return;

    // Disable button while loading
    sendBtn.disabled = true;
    sendBtn.style.opacity = "0.6";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        });

        const data = await response.json();

        console.log("AI Response:", data.response || data);

        input.value = ""; // Clear input

    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong connecting to the server.");
    } finally {
        sendBtn.disabled = false;
        sendBtn.style.opacity = "1";
    }
};

// ============================
// BUTTON CLICK
// ============================
sendBtn.addEventListener('click', handleSearch);

// ============================
// ENTER KEY
// ============================
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// ============================
// VOICE RECOGNITION
// ============================
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.interimResults = false;

    micBtn.addEventListener('click', () => {
        recognition.start();
        micBtn.style.opacity = "0.5";
    });

    recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        input.value = spokenText;

        // Auto send after voice
        handleSearch();
    };

    recognition.onend = () => {
        micBtn.style.opacity = "1";
    };

} else {
    console.warn("Speech Recognition not supported in this browser.");
}
