const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");

openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.style.display = "flex";
});

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.style.display = "none";
});
