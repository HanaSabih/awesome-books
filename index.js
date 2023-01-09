/* eslint-disable max-classes-per-file */
const form = document.querySelector('#form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const cardsContainer = document.querySelector('#cards');

const warningLabel = document.querySelector('.warningLabel');

class Storage {
  static addTodStorage(arrBooks) {
    const storage = localStorage.setItem('book', JSON.stringify(arrBooks));
    return storage;
  }

  static getStorage() {
    const storage =
      localStorage.getItem('book') === null
        ? []
        : JSON.parse(localStorage.getItem('book'));
    return storage;
  }
}

// array
let arrBooks = Storage.getStorage();
const id = 1;

// object books
class Books {
  constructor(id = 0, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}
// display books
class Card {
  static displayBook() {
    const displayBook = arrBooks.map(
      (item) => `
        <div class="card border-0">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.author}</p>
              <button class="btn btn-secondary remove w-25" data-id="${item.id}">remove</button>
              <hr/>
            </div>`
    );
    cardsContainer.innerHTML = displayBook.join(' ');
  }

  static clearInputs() {
    bookTitle.value = '';
    bookAuthor.value = '';
  }

  static removeBook() {
    cardsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
      }
      const bookId = e.target.dataset.id;
      Card.removeBookFromArr(bookId);
    });
  }

  static removeBookFromArr(id) {
    arrBooks = arrBooks.filter((item) => item.id !== +id);
    Storage.addTodStorage(arrBooks);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (bookTitle.value === '' || bookAuthor.value === '') {
    warningLabel.classList.remove('d-none');
  } else {
    warningLabel.classList.add('d-none');
    const book = new Books(id + 1, bookTitle.value, bookAuthor.value);

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
