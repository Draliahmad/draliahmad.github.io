document.addEventListener("DOMContentLoaded", () => {
  const chatbot = document.getElementById("ai-chatbot-window");
  const toggleBtn = document.getElementById("ai-chatbot-toggle");
  const form = document.getElementById("ai-chatbot-form");
  const input = document.getElementById("ai-chatbot-input");
  const messages = document.querySelector(".chat-messages");

  // Toggle open/close chatbot window
  toggleBtn.addEventListener("click", () => {
    chatbot.classList.toggle("open");
  });

  // Handle send message
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    // Add user message
    const userMsg = document.createElement("div");
    userMsg.className = "msg user";
    userMsg.textContent = text;
    messages.appendChild(userMsg);

    input.value = "";

    // Fake bot reply
    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.className = "msg bot";
      botMsg.textContent = "Hello! How can I help you?";
      messages.appendChild(botMsg);

      messages.scrollTop = messages.scrollHeight;
    }, 500);
  });
});
