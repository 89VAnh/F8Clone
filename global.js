const navLink = document.querySelector(".nav-link:has(.nav-create)");

navLink.onclick = () => {
  navLink.classList.toggle("active");
};
