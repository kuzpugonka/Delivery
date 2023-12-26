const modal = document.querySelector(".cart-modal__overlay");      // модалка
const cartBtn = document.querySelector("#cart-btn");               //кнопка в хэдере
const closeBtn = modal.querySelector(".cart-modal__header_close");  //крестик в модалке

const openModal = () => {                                          //чтобы открыть модалку
  modal.classList.add('open')                                      //добавляем класс
}


cartBtn.addEventListener("click", () => {                           //при клике на кнопку в хэдере
  openModal();                                                      //открыть модалку
});

const closeModal = () => {                                         //чтобы закрыть модалку
  modal.classList.remove('open');                                  //удалим класс
};

closeBtn.addEventListener("click", () => {                         //при клике на крестик в модалке  
  closeModal();                                                    //закроем модалку
});