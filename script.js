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

modalControls();
