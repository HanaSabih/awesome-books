/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const form = document.querySelector('#form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const cardsContainer = document.querySelector('#cards');

const warningLabel = document.querySelector('.warningLabel');
let id = 1;
class Storage {
  static addTodStorage(arrBooks) {
    const storage = localStorage.setItem('book', JSON.stringify(arrBooks));
    return storage;
  }

  static getStorage() {
    const storage = localStorage.getItem('book') === null
      ? []
      : JSON.parse(localStorage.getItem('book'));
    return storage;
  }
}

// array
let arrBooks = Storage.getStorage();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (bookTitle.value === '' || bookAuthor.value === '') {
    warningLabel.classList.remove('d-none');
  } else {
    warningLabel.classList.add('d-none');
    // id = id + 1;
    const book = new Books(id, bookTitle.value, bookAuthor.value);
    id += 1;
    arrBooks = [...arrBooks, book];
    Card.displayBook();
    Card.clearInputs();
    Card.removeBook();

    Storage.addTodStorage(arrBooks);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  Card.displayBook();
  // remove from the dom
  Card.removeBook();
});
