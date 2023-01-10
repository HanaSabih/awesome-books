/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// display books
class Card {
  static displayBook() {
    const displayBook = arrBooks.map(
      (item) => `
      <tr id="tr${item.id}">
      <td class="text-start"><span>"${item.title}"  By  ${item.author}</span></td>
      <td class="text-end"><button class="btn btn-secondary remove " data-id="${item.id}">remove</button></td>
    </tr>`,
    );
    cardsContainer.innerHTML = displayBook.join(' ');
  }

  static clearInputs() {
    bookTitle.value = '';
    bookAuthor.value = '';
  }

  static removeBook() {
    cardsContainer.addEventListener('click', (e) => {
      const bookId = e.target.dataset.id;
      if (e.target.classList.contains('remove')) {
        document.querySelector(`#tr${bookId}`).remove();
      }

      Card.removeBookFromArr(bookId);
    });
  }

  static removeBookFromArr(id) {
    arrBooks = arrBooks.filter((item) => item.id !== +id);
    Storage.addTodStorage(arrBooks);
  }
}
