  <!-- Agency Chatbot Widget -->
  <script>
  (function() {
    const script = document.createElement("script");
    script.src = "https://your-agency-server.com/static/chatbot.js";
    script.async = true;
    document.body.appendChild(script);
  })();
  </script>

</body>
</html>
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot</title>
    <link rel="stylesheet" href="chatbot.css"> <!-- Link to external CSS file -->
</head>
<body>

<!-- Chatbox UI -->
<div class="chatbox">
    <div class="messages" id="chatMessages">
        <!-- Chat messages will appear here -->
    </div>
    <div class="input-container">
        <input type="text" id="userMessage" placeholder="Type your message..." />
        <button id="sendButton">Send</button>
    </div>
</div>

<script src="script.js"></script> <!-- Link to external JavaScript file -->

</body>
</html>
