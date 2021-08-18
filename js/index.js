let searchField = document.querySelector('#search');
let clearButton = document.querySelector('#clear');
let main = document.querySelector('.main');

searchField.addEventListener('focus', () => {
  clearButton.classList.remove("hidden");
});

searchField.addEventListener('blur', () => {
  clearButton.classList.add('hidden');
});

let section = document.createElement('section')
section.classList.add('card');

// Date like
let dateLike = document.createElement('div')
dateLike.classList.add('date-like')

let dateArticle = document.createElement('span');
dateArticle.appendChild(document.createTextNode('03 de jun, 2021'));

let buttonLikeNode = document.createElement('button');
buttonLikeNode.classList.add('like');
buttonLikeNode.setAttribute('type', 'button');

// Article
let article = document.createElement('article');
article.classList.add('article');

let titleArticle = document.createElement('h2');
titleArticle.classList.add('title');
titleArticle.appendChild(document.createTextNode('Title Loren'));

let descriptionArticle = document.createElement('p');
descriptionArticle.classList.add('description');
descriptionArticle.appendChild(document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eveniet voluptas fuga saepe explicabo asperiores atque quae labore! Quos odit nisi voluptatem excepturi aspernatur cumque deserunt mollitia quisquam facere itaque."));

dateLike.appendChild(dateArticle);
dateLike.appendChild(buttonLikeNode);

article.appendChild(titleArticle);
article.appendChild(descriptionArticle);

section.appendChild(dateLike);
section.appendChild(article);

main.appendChild(section);

let buttonLike = document.querySelectorAll('.like');

[...buttonLike].map((button) => button.addEventListener('click', () => {
  if (button.classList[0] === 'like') {
    button.classList.remove('like');
    button.classList.add('liked');
  } else {
    button.classList.remove('liked');
    button.classList.add('like');
  }
  button.style.transition = "0.3s ease-out";
}));
