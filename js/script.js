const modalControls = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-btn");

  const openModal = () => {
    modal.classList.add("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  const closeModal = () => {
    modal.classList.remove("open");
  };

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header_close")
    ) {
      closeModal();
    }
  });
};

const restRender = () => {
  const container = document.querySelector("#rects-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      reiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      reiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest2.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      reiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest3.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      reiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest4.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      reiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest5.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      reiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<h1 style="width: 100%; text-align: center">Загрузка</h1>';
  };

  const renderRests = (array) => {
    container.innerHTML = "";

    array.forEach((cart) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<a href="goods.html?id=${cart.id}" class="products-cart">
      <div class="products-cart__img">
        <img src="./img/restorans/${cart.image}" alt="${cart.title}" />
      </div>
      <div class="products-cart__desc">
        <div class="products-cart__desc-row">
          <h4 class="products-cart__desc_title">${cart.title}</h4>
          <div class="products-cart__desc_badge">${cart.time}&nbsp;мин</div>
        </div>

        <div class="products-cart__desc-row">
          <div class="products-cart__desc-info">
            <div class="products-cart__desc-info_raiting">
              <img src="./img/star.svg" alt="star" />
              4.5
            </div>
            <div class="products-cart__desc-info_price">От ${cart.price}&nbsp;₽</div>
            <div class="products-cart__desc-info_group">${cart.type}</div>
          </div>
        </div>
      </div>
         </a>`
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderRests(restArray);
    }, 1000);
  }
};

const goodsRender = () => {
  const container = document.querySelector("#goods-container");

  const restArray = [
    {
      id: 0,
      title: "Ролл угорь стандарт",
      text: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "image.jpg",
    },
    {
      id: 1,
      title: "Калифорния лосось стандарт",
      text: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
      image: "image-2.jpg",
    },
    {
      id: 2,
      title: "Окинава стандарт",
      text: "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
      image: "image-4.jpg",
    },
    {
      id: 3,
      title: "Цезарь маки хl",
      text: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
      image: "image-1.jpg",
    },
    {
      id: 4,
      title: "Ясай маки стандарт 185 г",
      text: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
      image: "image-3.jpg",
    },
    {
      id: 5,
      title: "Ролл с креветкой стандарт",
      text: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
      image: "image-5.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<h1 style="width: 100%; text-align: center">Загрузка</h1>';
  };

  const renderGoods = (array) => {
    container.innerHTML = "";

    array.forEach((cart) => {
      container.insertAdjacentHTML(
        "beforeend",
        ` <div class="products-cart">
            <div class="products-cart__img">
              <img src="./img/goods/${cart.image}" alt="${cart.title}" />
            </div>
            <div class="products-cart__desc">
              <div class="products-cart__desc-row">
                <h5 class="products-cart__desc_name">${cart.title}</h5>
              </div>

              <div class="products-cart__desc-row">
                <p class="products-cart__desc_text">${cart.text}</p>
              </div>

              <div class="products-cart__desc-row">
                <div class="products-cart__desc-controls">
                  <button class="btn btn-primery">
                    <img src="./img/icons/shopping-cart.svg" alt="user" />В корзину
                  </button>
                  <span class="products-cart__desc-controls_price">${cart.price}&nbsp;₽</span>
                </div>
              </div>
            </div>
          </div>
        `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderGoods(restArray);
    }, 1000);
  }
};

modalControls();
restRender();
goodsRender();
