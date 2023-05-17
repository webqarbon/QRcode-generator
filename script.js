// Отримання посилань на HTML-елементи
const buttongen = document.getElementById('buttongen');
const img = document.getElementById('code');
const text = document.getElementById('text');
const buttonload = document.getElementById('btnl');
const size = document.getElementById('size');
const blue = document.getElementById('blue');
const sky = document.getElementById('sky');
const purple = document.getElementById('purple');
const green = document.getElementById('green');
const reset = document.getElementById('reset');

let color; // Змінна для зберігання обраного кольору

// Обробник події для кнопки скидання
reset.onclick = function () {
  text.value = ''; // Очистити вміст текстового вводу
  text.blur(); // Зняти фокус з текстового вводу
  img.src = 'start.png'; // Встановити початкове зображення
};

// Обробник події для кнопки синього кольору
blue.onclick = function () {
  color = '&chco=002c60'; // Встановити змінну кольору на синій
};

// Обробник події для кнопки небесно-блакитного кольору
sky.onclick = function () {
  color = '&chco=23B1DE'; // Встановити змінну кольору на небесно-блакитний
};

// Обробник події для кнопки фіолетового кольору
purple.onclick = function () {
  color = '&chco=660066'; // Встановити змінну кольору на фіолетовий
};

// Обробник події для кнопки зеленого кольору
green.onclick = function () {
  color = '&chco=336600'; // Встановити змінну кольору на зелений
};

// Обробник події для кнопки генерації QR-коду
buttongen.onclick = function () {
  img.src = 'https://chart.googleapis.com/chart?cht=qr&chl=' + text.value + '&chs=220x220&choe=UTF-8&chld=L|2' + color;
};

// Обробник події для кнопки завантаження QR-коду
buttonload.onclick = function () {
  img.src = 'https://chart.googleapis.com/chart?cht=qr&chl=' + text.value + '&chs=' + size.value + 'x' + size.value + '&choe=UTF-8&chld=L|2' + color;
  let imageUrl = img.src;

  let link = document.createElement('a');
  link.href = imageUrl;
  link.target = '_blank';
  link.click();
};
