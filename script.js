let phrases = [
  { text: 'сыграть в дурака с достоевским', image: 'http://pm1.narvii.com/7285/d706cd35e6b167d91d560e81f0308a4b484f2c69r1-1080-826v2_uhq.jpg' },
  { text: 'посмотреть скидки на книги', image: 'https://data.whicdn.com/images/324743617/original.jpg?t=1546570554' },
  { text: 'разобраться, о чём написано в книге Орлеан', image: 'https://cv9.litres.ru/pub/c/audiokniga/cover_max1500/66362198-liya-steffi-31132621-orlean-66362198.jpg' },
  { text: 'Энтони Юлай', image: 'https://i.ytimg.com/vi/4tB2VNUDnIU/maxresdefault.jpg' },
  { text: 'эстетично расставить  книги на полке', image: 'https://i.pinimg.com/originals/78/b1/17/78b11765c7964d21a098f671197536ce.png' },
  { text: 'читать про зарплаты в Японии', image: 'https://i.pinimg.com/736x/91/23/b2/9123b2c7e548358fd5c82287d3b723d2.jpg' },
  { text: 'прочитать книгу Мутный и ужаснуться в комментариях', image: 'https://img.wattpad.com/e5254827cba20a32a299695335b19b8081228406/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4e2d566c2d456c306b63314b78673d3d2d3538323035313337312e313533333735323566376665653134393639353132303539363030372e6a7067?s=fit&w=720&h=720' },
  { text: 'попасть в поток рок песен и вспомнить, как раньше подпевал под них', image: 'https://i.pinimg.com/originals/5a/27/46/5a2746481ba4ce619566a1cd04090004.jpg' },
  { text: 'посмотреть трейлер аниме и заодно первый сезон', image: 'https://i.pinimg.com/236x/1b/b7/f2/1bb7f2bba64b27fb6b3b33330d5fe246.jpg' },
  { text: 'пройти тест на факультет в хогвартсе', image: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/07/05/scale-1200.jpeg' }

];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');



button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 