/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// display books
class Card {
  static displayBook() {
    const displayBook = arrBooks.map(
      (item) => `
          <div class="card border-0">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.author}</p>
                <button class="btn btn-secondary remove w-50" data-id="${item.id}">remove</button>
                <hr/>
              </div>`,
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
