// 🚀 Smooth Button Effects
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
        button.style.transition = "0.2s";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

// ✨ Project Cards Hover Effect
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.3)";
        card.style.transform = "translateY(-5px)";
        card.style.transition = "0.3s";
    });
    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        card.style.transform = "translateY(0)";
    });
});

// ✅ Contact Form Validation
document.querySelector("form").addEventListener("submit", function (event) {
    let name = document.querySelector("input[type='text']").value.trim();
    let email = document.querySelector("input[type='email']").value.trim();
    let message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill out all fields before submitting.");
        event.preventDefault(); // Prevents form submission
    } else {
        alert("✅ Message sent successfully!");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const chatBtn = document.getElementById("chat-btn");
    const chatBox = document.getElementById("chat-box");
    const closeChat = document.getElementById("close-chat");
    const sendMessageBtn = document.getElementById("send-message");
    const userInput = document.getElementById("user-message");
    const chatMessages = document.getElementById("chat-messages");

    // ✅ Ensure chat box starts hidden
    chatBox.style.display = "none";

    // ✅ Open chat box on button click
    chatBtn.addEventListener("click", function () {
        console.log("Chat button clicked!"); // 🔥 Debug log
        chatBox.style.display = (chatBox.style.display === "block") ? "none" : "block";
    });

    // ❌ Close chat box on close button click
    closeChat.addEventListener("click", function () {
        chatBox.style.display = "none";
    });

    // ✨ Send message when clicking send button
    sendMessageBtn.addEventListener("click", sendMessage);

    // ⏎ Send message on pressing Enter
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });

    function sendMessage() {
        let messageText = userInput.value.trim();
        if (messageText === "") return;

        let userMessage = document.createElement("div");
        userMessage.textContent = "You: " + messageText;
        userMessage.style.textAlign = "right";
        userMessage.style.marginBottom = "5px";
        chatMessages.appendChild(userMessage);

        let botReply = document.createElement("div");
        botReply.textContent = "Bot: Got your message! 🚀";
        botReply.style.color = "gray";
        setTimeout(() => {
            chatMessages.appendChild(botReply);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            saveMessages();
        }, 500);

        userInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
        saveMessages();
    }

    function saveMessages() {
        localStorage.setItem("chatHistory", chatMessages.innerHTML);
    }

    function loadMessages() {
        const savedMessages = localStorage.getItem("chatHistory");
        if (savedMessages) {
            chatMessages.innerHTML = savedMessages;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // 🔥 Load chat history on page load
    loadMessages();
});
