function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Fechar o menu ao clicar em qualquer link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#navLinks a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("navLinks");
      nav.classList.remove("show");
    });
  });
});
