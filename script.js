const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");

openBtn.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});
