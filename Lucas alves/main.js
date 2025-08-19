// Impede zoom usando Ctrl + Scroll ou Ctrl + (+, -, 0)
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && ["+", "-", "0"].includes(event.key)) {
        event.preventDefault();
    }
});

document.addEventListener("wheel", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

// Função para abrir e fechar menus ao clicar na imagem
function toggleMenu(event, id) {
    event.stopPropagation(); // Impede que o clique dentro do menu feche ele

    const menu = document.getElementById("menu" + id);
    const allMenus = document.querySelectorAll(".menu");

    // Fecha todos os menus, exceto o atual
    allMenus.forEach(m => {
        if (m !== menu) m.classList.remove("active");
    });

    // Alterna o menu clicado
    menu.classList.toggle("active");
}

// Fecha os menus apenas se clicar fora deles
document.addEventListener("click", function () {
    document.querySelectorAll(".menu").forEach(menu => {
        menu.classList.remove("active");
    });
});

// Garante que o menu não feche ao clicar dentro dele
document.querySelectorAll(".menu").forEach(menu => {
    menu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

// Função para fechar o menu ao clicar no botão "×"
function closeMenu(id) {
    const menu = document.getElementById("menu" + id);
    if (menu) {
        menu.classList.remove("active");
    }
}
function check(checkbox) {
    const label = checkbox.parentElement;
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
      label.style.color = "gray";
    } else {
      label.style.textDecoration = "none";
      label.style.color = "white";
    }
  }