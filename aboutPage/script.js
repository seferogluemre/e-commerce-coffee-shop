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
  const sidebar = document.getElementById("yourCartSepet");
  const cartIcon = document.getElementById("cartİcon");
  const sidebarBtn = document.getElementById("closeBtnTwo");
  const sidebarBtnTwo = document.getElementById("closeBtn");
  cartIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.add("cartSepetShow");
  });

  sidebarBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.remove("cartSepetShow");
  });

  sidebarBtnTwo.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.remove("cartSepetShow");
  });

  document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !cartIcon.contains(event.target)) {
      sidebar.classList.remove("cartSepetShow");
    }
  });
  sidebar.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}
function getLocalData() {
  const cart = document.getElementById("cartRowOne");
  const storedData = JSON.parse(localStorage.getItem("cartItems")) || [];
  const rowHtml = document.getElementById("cartProductRows");
  const dataLength = storedData.length;
  const dataCount = document.getElementById("productLength");

  if (dataLength > 0) {
    cart.classList.add("cartHide");
    document.getElementById("clearCart").style.display = "block";
    storedData.forEach((data) => {
      rowHtml.innerHTML += `
        <div class="row mb-4">
          <div class="col-lg-4 col-sm-4"><img class="img-fluid h-100 cardImage" src="${data.picture}"></div>
          <div class="col-lg-8 col-sm-8">
            <p class="card-text">${data.name}</p>
            <div>
               <p class="cardPrice">Fiyat: ${data.price}</p>
            </div>
            <div>
              <h6>Ürün Adedi:  ${data.quantity}</h6>
            </div>
          </div>
        </div>
      `;
    });
  } else {
    cart.classList.remove("cartHide");
    document.getElementById("clearCart").style.display = "none";
    document.getElementById("closeBtnTwo").classList.add("closeBtnTwo");
  }
}
function clearData() {
  localStorage.clear();
  document.getElementById("cartProductRows").innerHTML = "";
  document.getElementById("cartRowOne").classList.remove("cartHide");
  location.reload;
}



document.addEventListener("DOMContentLoaded", (event) => {
  sidebarSublinkShow();
  YourCartShow();
  getLocalData();
});
