const input = document.getElementById("search");
const cards = document.querySelectorAll(".recipe-card");

input.addEventListener("input", () => {
  const termo = input.value.toLowerCase();
  
  cards.forEach(card => {
    const titulo = card.querySelector("h2").textContent.toLowerCase();
    if (titulo.includes(termo)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
