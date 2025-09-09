function mostrarMensagem() {
    alert("Entre em contato com um de nossos agentes pelo formulário abaixo!");
  }
  
  function enviarFormulario(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
  }

  function verPacotes() {
    const secaoPacotes = document.getElementById("pacotes");
    secaoPacotes.scrollIntoView({ behavior: "smooth" });
  }
  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  // Função para fechar o dropdown
  function fecharDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = "none";
  }
  