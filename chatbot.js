function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  appendMessage("Та", text);
  input.value = "";

  const reply = getBotReply(text.toLowerCase());
  setTimeout(() => appendMessage("Бот", reply), 400);
}

function appendMessage(sender, text) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  msg.classList.add("mb-2");
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotReply(msg) {
  if (msg.includes("тайлан")) return "Тайланг documents хавтсаас шалгана уу.";
  if (msg.includes("хурал")) return "Хурал өнөөдөр 14:00 цагт болно.";
  if (msg.includes("сайн уу")) return "Сайн байна уу, танд юугаар туслах вэ?";
  return "Уучлаарай, энэ асуултад хариулт алга.";
}
