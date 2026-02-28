(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };
    
    if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
        refs.openModalBtn.addEventListener("click", toggleModal);
        refs.closeModalBtn.addEventListener("click", toggleModal);
    }

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();
function changeImage(element, src) {
  // 1. Оновлюємо шлях до великого зображення
  const mainImg = document.getElementById('main-img');
  
  // Додаємо ефект "миготіння" для плавності
  mainImg.style.opacity = '0.5';
  
  setTimeout(() => {
    mainImg.src = src;
    mainImg.style.opacity = '1';
  }, 150);

  // 2. Змінюємо активну мініатюру (підсвітка)
  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.classList.remove('active');
  });
  element.classList.add('active');
}