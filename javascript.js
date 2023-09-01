const hero1 = document.querySelector('.hero1');
const hero2 = document.querySelector('.hero2');

const toggleHero = () => {
  hero1.classList.toggle('hidden');
  hero2.classList.toggle('hidden');
};

setInterval(toggleHero, 8000);

const dropdown = document.querySelector('.dropdown-list');
const dropDownBtn = document.querySelector('.dropButton');

dropDownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
});
