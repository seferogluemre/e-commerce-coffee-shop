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

function searchBoxToggle() {
  document
    .getElementById("toggleButton")
    .addEventListener("click", function () {
      const searchBox = document.querySelector(".searchBox");
      if (searchBox.classList.contains("show")) {
        searchBox.classList.remove("show");
        searchBox.style.height = "0";
      } else {
        searchBox.classList.add("show");
        searchBox.style.height = "100px"; // Div'in gerçek yüksekliği burada olmalı
      }
    });

  const searchBox = document.querySelector(".searchBox");

  document.getElementById("hideBtn").addEventListener("click", () => {
    searchBox.style.height = "0";
    searchBox.classList.remove("show");
  });

  document.addEventListener("click", function (event) {
    const toggleButton = document.getElementById("toggleButton");
    if (
      !searchBox.contains(event.target) && // Tıklanan yer searchBox'ın içinde değilse
      !toggleButton.contains(event.target) // Tıklanan yer toggleButton'un içinde değilse
    ) {
      searchBox.style.height = "0";
      searchBox.classList.remove("show");
    }
  });
}

function searchCardIncludes() {
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("keyup", function () {
    const searchTerm = searchInput.value.toLowerCase();
    cards.forEach((card) => {
      const cardTitle = card
        .querySelector(".card-title")
        .textContent.toLowerCase();
      if (cardTitle.includes(searchTerm)) {
        card.parentElement.style.display = "";
      } else {
        card.parentElement.innerHTML = ``;
      }
    });
  });
}

function YourCartShow() {
  const sidebar = document.getElementById("yourCartSepet");
  const cartIcon = document.getElementById("cartİcon");
  const sidebarBtn = document.getElementById("closeBtn");

  cartIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.add("cartSepetShow");
  });

  sidebarBtn.addEventListener("click", (event) => {
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

const AllProducts = [
  {
    productId: 1,
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/b21da833-09fa-4215-8dc3-9e4b8c1798c5/2560/nicaragua-san-jose-250gr-3.webp",
    productName: "Gloria Jean'S Nikaragua 250gr",
    productPrice: "₺395.00",
    productRating: "4",
    productİnside: "Orta-Yumuşak",
    productCountry: "Nikaragua",
    productTastingNote: "Bergamot",
    productQuantity: "1",
  },
  {
    productId: "2",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/c92967da-e5e7-4512-8179-a86c1d8d06a8/540/ethiopia-yirgacheffe-250gr-3.webp",
    productName: "Gloria Jean'S Ethiopia Yirgacheffe 250gr",
    productPrice: "₺395.00",
    productRating: "5",
    productİnside: "Yogun",
    productCountry: "Ethiopia",
    productTastingNote: "Kakao",
    productQuantity: "1",
  },
  {
    productId: "3",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/b351a0f2-1d7f-436c-8fdf-c724a24ef310/540/columbia-la-manuela-250gr-3.webp",
    productName: "Gloria Jean'S Colombia La Manuela 250gr",
    productPrice: "₺395.00",
    productRating: "5",
    productİnside: "Yumuşak",
    productCountry: "Colombia",
    productTastingNote: "Esmer Şeker",
    productQuantity: "1",
  },
  {
    productId: "4",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/cc207cc2-724e-47df-a089-7d6b005ec51c/2560/gj-tk-1.webp",
    productName: "Gloria Jean's Türk Kahvesi 500gr",
    productPrice: "₺350.00",
    productRating: "4",
    productİnside: "Orta-Yumuşak",
    productCountry: "Türkiye",
    productTastingNote: "Kakao",
    productQuantity: "1",
  },
  {
    productId: "5",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/28b482db-aa61-4d48-a320-2f270489155b/2560/brazil-soracabana-250gr-3.webp",
    productName: "Gloria Jean's Brazilya  Soracabana 250gr",
    productPrice: "₺395.00",
    productRating: "5",
    productİnside: "Yogun",
    productCountry: "Brazilya",
    productTastingNote: "Meyvemsi",
    productQuantity: "1",
  },
  {
    productId: "6",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/b21da833-09fa-4215-8dc3-9e4b8c1798c5/540/nicaragua-san-jose-250gr-3.webp",
    productName: "Gloria Jean's Nikaragua 500gr",
    productPrice: "₺400.00",
    productRating: "4",
    productİnside: "Yogun",
    productCountry: "Nikaragua",
    productTastingNote: "Kakao",
    productQuantity: "1",
  },
  {
    productId: "7",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/1b0c4eb2-dd90-4962-972e-3ff0ca127041/540/gjeb-1.webp",
    productName: "Gloria Jean's Glorious Blend 1000gr",
    productPrice: "₺1300.00",
    productRating: "5",
    productİnside: "Yumuşak",
    productCountry: "Colombia",
    productTastingNote: "Topraksı",
    productQuantity: "1",
  },
  {
    productId: "8",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/324fd78c-6ce3-4cd1-8ee8-429c96e5da2a/1080/houndras-san-andres-250gr-3.webp",
    productName: "Gloria Jean'S Honduras San Andreas 250gr",
    productPrice: "₺395.00",
    productRating: "4",
    productİnside: "Yogun",
    productCountry: "Honduras",
    productTastingNote: "Esmer Şeker",
    productQuantity: "1",
  },
  {
    productId: "9",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/a2b0a322-2fac-46a0-bdcb-68241f27ceb8/1080/papua-new-guinea-250gr-3.webp",
    productName: "Gloria Jean'S Papua Yeni Gine Estate Sigri 250gr",
    productPrice: "₺480.00",
    productRating: "3",
    productİnside: "Yogun",
    productCountry: "Papua Yeni Gine",
    productTastingNote: "Meyvemsi",
    productQuantity: "1",
  },
  {
    productId: "10",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/554a8bd0-a6a7-4231-b29f-464f1854335b/1080/glorious-belnd-250gr-3.webp",
    productName: "Gloria Jean's Glorious Blend 250gr",
    productPrice: "₺395.00",
    productRating: "4",
    productİnside: "Orta-Yumuşak",
    productCountry: "Brazilya",
    productTastingNote: "Çikolata",
    productQuantity: "1",
  },
  {
    productId: "11",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/b1019301-1381-4a3b-95c8-34260ceec2d2/1080/special-espresso-blend-250gr-3.webp",
    productName: "Gloria Jean's Special Espresso Blend 250gr",
    productPrice: "₺395.00",
    productRating: "4",
    productİnside: "Yumuşak",
    productCountry: "Ethiopia",
    productTastingNote: "Çikolata",
    productQuantity: "1",
  },
  {
    productId: "12",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/b21da833-09fa-4215-8dc3-9e4b8c1798c5/540/nicaragua-san-jose-250gr-3.webp",
    productName: "Gloria Jean's Glorious Blend 1000gr",
    productPrice: "₺1300.00",
    productRating: "5",
    productİnside: "Orta-Yumuşak",
    productCountry: "Honduras",
    productTastingNote: "Meyvemsi",
    productQuantity: "1",
  },
  {
    productId: "13",
    productPicture:
      "https://cdn.myikas.com/images/23326af2-7e3b-4ec5-b3d4-602b54e0332d/c8b819d8-3596-43ec-bef8-aa9c9a5d0745/1080/special-espresso-blend-1000gr-3.webp",
    productName: "Gloria Jean's Special Espresso Blend 1000gr",
    productPrice: "₺1300.00",
    productRating: "5",
    productİnside: "Yumuşak",
    productCountry: "Ethiopia",
    productTastingNote: "Çikolata",
    productQuantity: "1",
  },
];

function getStars(rating) {
  const fullStar = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.396.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.33-.314-.158-.888.283-.95l4.898-.696L8 1.01l2.148 4.308 4.898.696c.441.062.613.636.282.95l-3.522 3.356.83 4.73c.078.443-.35.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
    `;
  const emptyStar = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.387.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.158-.888-.282-.95l-4.898-.696L8 1.01 5.852 5.318l-4.898.696c-.441.062-.613.636-.282.95l3.522 3.356-.83 4.73zM8 12.583l-3.716 1.91.712-4.05-2.961-2.818 4.082-.581L8 3.57l1.883 3.875 4.082.58-2.961 2.819.712 4.05L8 12.583z"/>
        </svg>
    `;

  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? fullStar : emptyStar;
  }
  return stars;
}
// ----------------------------------
function FilterAccordionSidebarToggle() {
  const openFilterSidebarButton = document.getElementById("btnFiltered");
  const sidebar = document.getElementById("filterAccordionSidebar");
  const closeBtn = document.getElementById("filterSidebarCloseBtn");

  openFilterSidebarButton.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.add("filterAccordionSidebarShow");
  });

  closeBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.remove("filterAccordionSidebarShow");
  });

  document.addEventListener("click", (event) => {
    if (
      !sidebar.contains(event.target) &&
      !openFilterSidebarButton.contains(event.target)
    ) {
      sidebar.classList.remove("filterAccordionSidebarShow");
    }
  });
  sidebar.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

function setProductData() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  document.querySelectorAll(".addToCart").forEach((button) => {
    button.addEventListener("click", function () {
      const card = this.closest(".card");
      const cardId = card.getAttribute("data-id");
      const cardName = card.querySelector(".card-title").textContent;
      const cardPrice = card.querySelector(".productPrice").textContent;
      const productPicture = card.querySelector(".card-img-top").src;

      const existingProductIndex = cartItems.findIndex(
        (item) => item.id === cardId
      );

      if (existingProductIndex !== -1) {
        cartItems[existingProductIndex].quantity += 1;
      } else {
        const product = {
          id: cardId,
          name: cardName,
          price: cardPrice,
          picture: productPicture,
          quantity: 1,
        };
        cartItems.push(product);
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      alert(`Harika ${cardName} adlı ürünü sepetinize eklediniz`);
      location.reload();
    });
  });
}

function FilterAccordionShow() {
  const accordionFilterRow = document.getElementById("filterRowOne");

  // Filter One
  const ınsıdeDataObject = AllProducts.map((ınsıdeData) => {
    return ınsıdeData.productİnside;
  });
  const uniqueInsıde = [...new Set(ınsıdeDataObject)];

  // Filter Two
  const countryDataObject = AllProducts.map((countryData) => {
    return countryData.productCountry;
  });
  const uniqueCountryData = [...new Set(countryDataObject)];

  // Filter Three
  const tastingNote = AllProducts.map((tastingNoteData) => {
    return tastingNoteData.productTastingNote;
  });
  const uniqueTastingNote = [...new Set(tastingNote)];

  let checkboxHtml = `
    <div class="accordion" id="filterAccordionInside">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingInside">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseInside"
            aria-expanded="true"
            aria-controls="collapseInside"
          >
            İçim
          </button>
        </h2>
        <div
          id="collapseInside"
          class="accordion-collapse collapse show"
          aria-labelledby="headingInside"
          data-bs-parent="#filterAccordionInside"
        >
          <div class="accordion-body filter-section">`;

  uniqueInsıde.forEach((productİnside, index) => {
    checkboxHtml += `
      <div class="form-check custom-checkbox">
        <input
          class="form-check-input"
          type="checkbox"
          id="optionInside${index}"
          value="${productİnside}"
          name="filterCheckbox"
        />
        <label class="form-check-label" for="optionInside${index}">
          ${productİnside}
        </label>
      </div>`;
  });

  checkboxHtml += `
          </div>
        </div>
      </div>
    </div>`;

  let checkboxCountryHtml = ` 
    <div class="accordion" id="filterAccordionCountry">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingCountry">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseCountry"
            aria-expanded="true"
            aria-controls="collapseCountry"
          >
            Ülke
          </button>
        </h2>
        <div
          id="collapseCountry"
          class="accordion-collapse collapse show"
          aria-labelledby="headingCountry"
          data-bs-parent="#filterAccordionCountry"
        >
          <div class="accordion-body filter-section">`;

  uniqueCountryData.forEach((productCountry, index) => {
    checkboxCountryHtml += `
      <div class="form-check custom-checkbox">
        <input
          class="form-check-input"
          type="checkbox"
          id="optionCountry${index}"
          value="${productCountry}"
          name="filterCheckboxCountry"
        />
        <label class="form-check-label" for="optionCountry${index}">
          ${productCountry}
        </label>
      </div>`;
  });

  checkboxCountryHtml += `
          </div>
        </div>
      </div>
    </div>`;

  let checkboxTastingNoteHtml = ` 
    <div class="accordion" id="filterAccordionTastingNote">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTastingNote">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTastingNote"
            aria-expanded="true"
            aria-controls="collapseTastingNote"
          >
            Tadım Notu
          </button>
        </h2>
        <div
          id="collapseTastingNote"
          class="accordion-collapse collapse show"
          aria-labelledby="headingTastingNote"
          data-bs-parent="#filterAccordionTastingNote"
        >
          <div class="accordion-body filter-section">`;

  uniqueTastingNote.forEach((productTastingNote, index) => {
    checkboxTastingNoteHtml += `
      <div class="form-check custom-checkbox">
        <input
          class="form-check-input"
          type="checkbox"
          id="optionTastingNote${index}"
          value="${productTastingNote}"
          name="filterCheckboxTastingnote"
        />
        <label class="form-check-label" for="optionTastingNote${index}">
          ${productTastingNote}
        </label>
      </div>`;
  });
  checkboxTastingNoteHtml += `
          </div>
        </div>
      </div>
    </div>`;

  // Combine all the HTML
  accordionFilterRow.innerHTML +=
    checkboxHtml + checkboxCountryHtml + checkboxTastingNoteHtml;

  // Filter Products-----------------------------------------
  function filterProducts() {
    // Retrieve all selected filter values
    const selectedFilteredOne = Array.from(
      document.querySelectorAll('input[name="filterCheckbox"]:checked')
    ).map((checkbox) => checkbox.value);

    const selectedFilteredCountry = Array.from(
      document.querySelectorAll('input[name="filterCheckboxCountry"]:checked')
    ).map((checkbox) => checkbox.value);

    const selectedFilteredTastingNote = Array.from(
      document.querySelectorAll(
        'input[name="filterCheckboxTastingnote"]:checked'
      )
    ).map((checkbox) => checkbox.value);

    // Filter products based on all selected filters
    let filteredProducts = AllProducts;

    if (selectedFilteredOne.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilteredOne.includes(product.productİnside)
      );
    }

    if (selectedFilteredCountry.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilteredCountry.includes(product.productCountry)
      );
    }

    if (selectedFilteredTastingNote.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilteredTastingNote.includes(product.productTastingNote)
      );
    }

    // Display filtered products
    document.getElementById("productRow").innerHTML = filteredProducts
      .map(
        (productFltr) =>
          `<div class="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div class="card" data-price="${
              productFltr.productPrice
            }" data-id=${productFltr.productId}>
              <img
                src="${productFltr.productPicture}"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title fw-lighter">${
                  productFltr.productName
                }</h6>
                <p class="card-text">${getStars(productFltr.productRating)}</p>
                <p class="card-text py-2 fs-6 productPrice">${
                  productFltr.productPrice
                }.</p>
                <a class="btn btn-primary addToCart">Sepete Ekle</a>
                
              </div>
            </div>
          </div>`
      )
      .join("");

    setProductData();
  }

  // Attach the filter function to checkbox change events
  document
    .querySelectorAll(
      'input[name="filterCheckbox"], input[name="filterCheckboxCountry"], input[name="filterCheckboxTastingnote"]'
    )
    .forEach((checkbox) => {
      checkbox.addEventListener("change", filterProducts);
    });
}
// Hem Kartları yansıtıp hemde Olay dinleyici ekleyerek sepete ekleme işlemimizi yaptık
let productRender = false;
function allProductRender() {
  const productRow = document.getElementById("productRow");
  if (productRender) {
    productRender = false;
    productRow.innerHTML = "";
  } else {
    productRow.innerHTML = ""; // Önce temizleyelim, sonra ekleyelim
    AllProducts.forEach((product) => {
      productRow.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-6 mb-4 product-card" id="myCol">
                <div class="card" data-id="${product.productId}">
                  <img
                    src="${product.productPicture}"
                    class="card-img-top"
                    alt="${product.productName}"
                  />
                  <div class="card-body">
                    <h6 class="card-title fw-lighter">${
                      product.productName
                    }</h6>
                    <p class="card-text productRating">${getStars(
                      product.productRating
                    )}</p>
                    <p class="card-text productPrice py-2 fs-6">${
                      product.productPrice
                    }</p>
                    <a href="#" class="btn btn-primary addToCart">Sepete Ekle</a>
                  </div>
                </div>
        </div>`;
    });
  }
  setProductData();
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
  location.reload();
  localStorage.clear();
  document.getElementById("cartProductRows").innerHTML = "";
  document.getElementById("cartRowOne").classList.remove("cartHide");
}

document.getElementById("closeBtnTwo").addEventListener("click", (event) => {
  document.getElementById("yourCartSepet").classList.remove("cartSepetShow");
});
// Bitişi Buradadır!-----------------------------------------------

// Product Inside Data
const productİnsideData = AllProducts.map((product) => {
  return product.productİnside;
});
const uniqueProductİnside = [...new Set(productİnsideData)];
// Product Country Data
const productCountryData = AllProducts.map((product) => {
  return product.productCountry;
});
const uniqueCountryData = [...new Set(productCountryData)];
// Product Tasting Data
const productTastingNoteData = AllProducts.map((product) => {
  return product.productTastingNote;
});
const uniqueProductTastingNote = [...new Set(productTastingNoteData)];

// Bütün Filtreleme Checkboxlarını üstten aldıgımız verilere göre oluşturduk Ve FilterAccordionShow Fonksiyonu ile hem mobile hem masaüstünde aynı degerlere sahip olan checkboxlara filtreleme işlemi uygulandı
function createCountryCheckbox() {
  const filterCheckSection = document.getElementById("filter-section");
  let checkboxCountryHtml = ` 
    <div class="accordion" id="filterAccordionCountry">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingCountry">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseCountry"
            aria-expanded="true"
            aria-controls="collapseCountry"
          >
            Ülke
          </button>
        </h2>
        <div
          id="collapseCountry"
          class="accordion-collapse collapse show"
          aria-labelledby="headingCountry"
          data-bs-parent="#filterAccordionCountry"
        >
          <div class="accordion-body filter-section">`;

  uniqueCountryData.forEach((productCountry, index) => {
    checkboxCountryHtml += `
      <div class="form-check custom-checkbox">
        <input
          class="form-check-input"
          type="checkbox"
          id="optionCountry${index}"
          value="${productCountry}"
          name="filterCheckboxCountry"
        />
        <label class="form-check-label" for="optionCountry${index}">
          ${productCountry}
        </label>
      </div>`;
  });

  checkboxCountryHtml += `
          </div>
        </div>
      </div>
    </div>`;

  let checkboxHtml = `
    <div class="accordion" id="filterAccordionInside">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingInside">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseInside"
            aria-expanded="true"
            aria-controls="collapseInside"
          >
            İçim
          </button>
        </h2>
        <div
          id="collapseInside"
          class="accordion-collapse collapse show"
          aria-labelledby="headingInside"
          data-bs-parent="#filterAccordionInside"
        >
          <div class="accordion-body filter-section">`;

  uniqueProductİnside.forEach((productİnside, index) => {
    checkboxHtml += `
      <div class="form-check custom-checkbox">
        <input
          class="form-check-input"
          type="checkbox"
          id="optionInside${index}"
          value="${productİnside}"
          name="filterCheckbox"
        />
        <label class="form-check-label" for="optionInside${index}">
          ${productİnside}
        </label>
      </div>`;
  });

  checkboxHtml += `
          </div>
        </div>
      </div>
    </div>`;

  let checkboxTastingNoteHtml = ` 
    <div class="accordion" id="filterAccordionTastingNote">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTastingNote">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTastingNote"
            aria-expanded="true"
            aria-controls="collapseTastingNote"
          >
            Tadım Notu
          </button>
        </h2>
        <div
          id="collapseTastingNote"
          class="accordion-collapse collapse show"
          aria-labelledby="headingTastingNote"
          data-bs-parent="#filterAccordionTastingNote"
        >
          <div class="accordion-body filter-section">`;

  uniqueProductTastingNote.forEach((productTastingNote, index) => {
    checkboxTastingNoteHtml += `
      <div class="form-check custom-checkbox">
        <input
          class="form-check-input"
          type="checkbox"
          id="optionTastingNote${index}"
          value="${productTastingNote}"
          name="filterCheckboxTastingnote"
        />
        <label class="form-check-label" for="optionTastingNote${index}">
          ${productTastingNote}
        </label>
      </div>`;
  });

  checkboxTastingNoteHtml += `
          </div>
        </div>
      </div>
    </div>`;

  filterCheckSection.innerHTML =
    checkboxCountryHtml + checkboxHtml + checkboxTastingNoteHtml;
}

// Yüksek Degerlendirilen Ürünler için veriyi çektik
const productHightRating = AllProducts.filter((productRating) => {
  let productRatings = productRating.productRating === "5";
  return productRatings;
});
// Burda ise üstte filtreledigimiz ratingi 5 olan ürünler eleman olarak tutuluyor şimdi aşagıda ise o elemanları foreach döngüsüne sokup html kısmına template ile yansıttık
let highRatingProductRendered = false;
function highRatingProductRender(filterProduct) {
  const productRow = document.getElementById("productRow");
  if (highRatingProductRendered) {
    productRow.innerHTML = "";
    highRatingProductRendered = false;
  } else {
    productHightRating.forEach((productsFiltered) => {
      productRow.innerHTML += ` <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div class="card" data-id=${
                  productsFiltered.productId
                } data-price"${productsFiltered.productPrice}">
                  <img
                    src="${productsFiltered.productPicture}"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h6 class="card-title fw-lighter">${
                      productsFiltered.productName
                    }</h6>
                    <p class="card-text">${getStars(
                      productsFiltered.productRating
                    )}</p>
                    <p class="card-text py-2 fs-6 productPrice">${
                      productsFiltered.productPrice
                    }.</p>
                    <div > <a href="#" class="btn btn-primary addToCart">Sepete Ekle</a></div>
                  </div>
                </div>
      </div>`;
      setProductData();
    });
  }
}
// Burda ise seçilen selectin Valuesini kontrol edip Degerlendirmesi yüksek ise üstteki highRatingProductRating Fonksiyonunu Çagırdık.
function highRatingSelectedValue() {
  document
    .getElementById("form-select")
    .addEventListener("change", function () {
      const selectValue = this.value;
      if (selectValue === "highRating") {
        document.getElementById("productRow").innerHTML = "";
        highRatingProductRender(productHightRating);
      } else {
        document.getElementById("productRow").innerHTML = "";
        allProductRender();
      }
    });
}
// Cartların Grid yapısı
function gridCardOne() {
  document.getElementById("gridBtn").addEventListener("click", () => {
    let elements = document
      .getElementById("productRow")
      .getElementsByClassName("col-lg-3");

    // Önce tüm 'gridOne' sınıflarını kaldırın
    for (let element of elements) {
      element.classList.remove("gridTwo");
      element.classList.add("gridOne");
    }
  });
}
function gridCardTwo() {
  document.getElementById("gridBtnTwo").addEventListener("click", () => {
    let elements = document
      .getElementById("productRow")
      .getElementsByClassName("col-lg-3");

    for (let element of elements) {
      element.classList.remove("gridOne");
      element.classList.add("gridTwo");
    }
  });
}
document.addEventListener("DOMContentLoaded", (event) => {
  sidebarSublinkShow();
  YourCartShow();
  allProductRender();
  createCountryCheckbox();
  highRatingSelectedValue();
  gridCardOne();
  gridCardTwo();
  getLocalData();
  FilterAccordionSidebarToggle();
  FilterAccordionShow();
  searchBoxToggle();
  searchCardIncludes();
});
