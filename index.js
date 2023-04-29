const fortunes = ['大吉', '中吉', '小吉', '吉', '凶', '大凶'];

const omikujiButton = document.getElementById('omikujiButton');
const fortuneElement = document.getElementById('fortune');

omikujiButton.addEventListener('click', function () {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneElement.textContent = fortune;
});