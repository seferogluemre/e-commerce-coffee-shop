// Mobile Sidebar sublink
function sidebarSublinkShow() {
  document
    .getElementById("sidebarCoffeeLink")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("subSidebar").classList.add("show-sub-sidebar");
    });

  document.getElementById("backBtn").addEventListener("click", function () {
    document.getElementById("subSidebar").classList.remove("show-sub-sidebar");
    document.getElementById("sidebar").classList.add("show-sidebar");
    document.getElementById("burgerMenu").style.display = "none"; // Keep burger menu hidden
  });
}

function YourCartShow() {
  document.getElementById("cartİcon").addEventListener("click", (event) => {
    document.getElementById("yourCartSepet").classList.add("cartSepetShow");
  });
  document.getElementById("closeBtn").addEventListener("click", (event) => {
    document.getElementById("yourCartSepet").classList.remove("cartSepetShow");
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  sidebarSublinkShow();
  YourCartShow();
});
