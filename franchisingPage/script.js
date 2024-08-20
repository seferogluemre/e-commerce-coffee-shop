const countryData = {
  Türkiye: {
    code: "+90",
    flag: "https://cdn-icons-png.flaticon.com/512/10029/10029532.png",
  },
  ABD: {
    code: "+1",
    flag: "https://cdn-icons-png.flaticon.com/512/4060/4060219.png",
  },
  Almanya: {
    code: "+49",
    flag: "https://cdn-icons-png.flaticon.com/512/203/203037.png",
  },
  Fransa: {
    code: "+33",
    flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oe9LYxMKD1PHzZaOjqH6JCTB8UU4q4Y1Zw&usqp=CAU",
  },
  İngiltere: {
    code: "+44",
    flag: "https://cdn-icons-png.flaticon.com/512/9105/9105924.png",
  },
  İtalya: {
    code: "+39",
    flag: "https://cdn-icons-png.flaticon.com/512/203/203092.png",
  },
  İspanya: {
    code: "+34",
    flag: "https://cdn-icons-png.flaticon.com/512/203/203059.png",
  },
  Hollanda: {
    code: "+31",
    flag: "https://cdn-icons-png.flaticon.com/512/202/202906.png",
  },
  Portekiz: {
    code: "+351",
    flag: "https://cdn-icons-png.flaticon.com/512/202/202928.png",
  },
  Belçika: {
    code: "+32",
    flag: "https://cdn-icons-png.flaticon.com/512/203/203049.png",
  },
  Avusturya: {
    code: "+43",
    flag: "https://cdn-icons-png.flaticon.com/512/202/202912.png",
  },
  Danimarka: {
    code: "+45",
    flag: "https://cdn-icons-png.flaticon.com/512/203/203031.png",
  },
  İsveç: {
    code: "+46",
    flag: "https://cdn-icons-png.freepik.com/512/203/203030.png",
  },
  Norveç: {
    code: "+47",
    flag: "https://cdn-icons-png.flaticon.com/512/203/203045.png",
  },
  İsviçre: {
    code: "+41",
    flag: "https://cdn-icons-png.freepik.com/512/5104/5104631.png",
  },
  Polonya: {
    code: "+48",
    flag: "https://cdn-icons-png.flaticon.com/512/202/202995.png",
  },
  "Çek Cumhuriyeti": {
    code: "+420",
    flag: "https://cdn-icons-png.flaticon.com/512/203/203042.png",
  },
  Macaristan: {
    code: "+36",
    flag: "https://cdn-icons-png.flaticon.com/512/203/203050.png",
  },
  Slovakya: {
    code: "+421",
    flag: "https://cdn-icons-png.flaticon.com/512/203/203058.png",
  },
  Slovenya: {
    code: "+386",
    flag: "https://cdn-icons-png.flaticon.com/512/203/203099.png",
  },
};

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

function populateCountrySelect() {
  const select = document.getElementById("country");
  for (const [country, data] of Object.entries(countryData)) {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = `${country} (${data.code})`;
    option.setAttribute("data-flag", data.flag);
    select.appendChild(option);
  }
}

function updateFlag() {
  const select = document.getElementById("country");
  const selectedOption = select.options[select.selectedIndex];
  const flagSrc = selectedOption.getAttribute("data-flag");
  const flagImage = document.createElement("img");
  flagImage.src = flagSrc;
  flagImage.className = "flag-icon";
  flagImage.style.height = "50px";
  const result = document.getElementById("result");
  result.innerHTML = `Telefon kodu: ${countryData[select.value].code} `;
  result.prepend(flagImage);
}

// Ensure the flag updates on selection change
document.getElementById("country").addEventListener("change", updateFlag);

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

document.addEventListener("DOMContentLoaded", (event) => {
  sidebarSublinkShow();
  YourCartShow();
  populateCountrySelect();
  updateFlag();
  getLocalData();
});
