// Mobile Sidebar sublink
function sidebarSublinkShow() {
  document
    .getElementById("sidebarCoffeeLink")
    .addEventListener("click", function (e) {
      e.preventDefault();
    });
}

function YourCartShow() {
  const sidebar = document.getElementById("yourCartSepet");
  const cartIcon = document.getElementById("cartİcon");
  const sidebarBtn = document.getElementById("closeBtn");
  const btn = document.getElementById("closeBtnTwo");
  cartIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.add("cartSepetShow");
  });

  sidebarBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.remove("cartSepetShow");
  });

  btn.addEventListener("click", (event) => {
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
function siparişÖzeti(storedData) {
  const column = document.getElementById("siparişÖzeti");

  let total = storedData;

  column.innerHTML = ` <div class="text-center">
                        <h4 class="title">Sipariş Özeti</h4>
                    </div>
                    <div class="info my-4">
                        <span class="pe-5 fw-medium">Ara Toplam</span>
                        <span class="ps-5 fw-medium">395.00Tl₺</span>
                    </div>
                    <p class="title fs-6">Ödeme İşlemi sonraki adımda yapılacaktır</p>
                    <div class="d-grid">
                        <button class="btn Shopbtn text-white">Alışverişi Tamamla<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                          </svg></button>
               </div>
              <div class="row my-3">
                <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 text-center"><img class="img-flid w-50" src="https://cdn.myikas.com/images/theme-images/f51bfbcc-6f7c-48f9-afa4-274dfa8c3a78/image_180.webp"></div>
                <div class="col-lg-8 col-md-6 my-auto"><span class="ps-2">256 Bit SSL İle güvende alışveriş</span></div>
                </div>
              </div>
               <div class="row my-3">
                <div class="col-lg-4 col-md-4 col-sm-6 m-0 text-center"><img class="img-flid w-50" src="https://cdn.myikas.com/images/theme-images/e639e3a9-0680-4339-8da9-ffdee1a339ad/image_180.webp"></div>
                <div class="col-lg-8 col-md-6 my-auto"><span>Tüm ürünlerde geçerli ücretsiz kargo.</span></div>

               `;
}

function getLocalData() {
  const storedData = JSON.parse(localStorage.getItem("cartItems")) || [];
  const rowHtml = document.getElementById("cartProduct");
  const dataLength = storedData.length;
  const dataCount = document.getElementById("productLength");

  if (dataLength > 0) {
    storedData.forEach((data) => {
      rowHtml.innerHTML += `
        <div class="row mb-4">
          <div class="col-lg-4 col-sm-4"><img class="img-fluid h-100 cardImage" src="${data.picture}"></div>
          <div class="col-lg-4 col-sm-8 pt-lg-5 pt-4">
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
  location.reload();
  localStorage.clear();
  document.getElementById(
    "cartProduct"
  ).innerHTML = `<h1 class="fw-bold">Sepetinizde Ürün Bulunmamaktadır</h1>`;
  document.getElementById("cartRowOne").classList.remove("cartHide");
}

document.addEventListener("DOMContentLoaded", (event) => {
  sidebarSublinkShow();
  YourCartShow();
  getLocalData();
  siparişÖzeti();
});
