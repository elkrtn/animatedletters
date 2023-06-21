document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.getElementById("animatedText");
  const textContent = animatedText.textContent;
  animatedText.innerHTML = "";

  for (let i = 0; i < textContent.length; i++) {
    const span = document.createElement("span");
    span.classList.add("letter");
    span.textContent = textContent[i];
    animatedText.appendChild(span);
  }
});
