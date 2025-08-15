// Функция открытия модального окна
function openModal(imgSrc) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImage");
  
  // Сброс состояний анимаций
  modalImg.classList.remove("loaded");
  modal.classList.remove("show");
  
  // Установка изображения
  modalImg.src = imgSrc;
  modal.style.display = "block";
  
  // Добавляем класс для темного фона body
  document.body.classList.add("modal-open");
  
  // Задержка для корректного запуска анимаций
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
  
  // Анимация загрузки изображения
  modalImg.onload = function() {
    this.classList.add("loaded");
  };
  
  // Обработка ошибок загрузки изображения
  modalImg.onerror = function() {
    console.error("Ошибка загрузки изображения:", imgSrc);
    this.alt = "Изображение не загружено";
    this.classList.add("loaded"); // Все равно показываем модалку
  };
}

// Функция закрытия модального окна
function closeModal() {
  const modal = document.getElementById("myModal");
  
  // Запускаем анимацию исчезновения
  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
  
  // Полное скрытие после завершения анимации
  setTimeout(() => {
    modal.style.display = "none";
  }, 300); // Должно совпадать с duration анимации в CSS
}

// Закрытие по клику вне изображения
window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Закрытие по клавише Esc
document.onkeydown = function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
};

// Инициализация обработчиков для всех кликабельных текстов
document.querySelectorAll(".clickable-text").forEach(item => {
  item.addEventListener("click", function() {
    const imgSrc = this.parentElement.querySelector("img").src;
    openModal(imgSrc);
  });
});