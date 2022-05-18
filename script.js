let btnAddBook = document.querySelector("#add-book");
let bookContainer = document.querySelector(".book-container");
let inputBookTitle = document.getElementById("book-title");
let inputBookAuthor = document.querySelector("#book-author");
let inputBookPages = document.querySelector("#book-pages");
let btnToggleRead = document.querySelector("#toggle-read");
let btnRemoveBook = document.getElementsByClassName("remove-book");

let myLibrary = [];

btnAddBook.addEventListener("click", addBookToLibrary);
document.addEventListener("click", removeBook);

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  // the constructor...
}

function updateDisplay() {
  //loop through each objects in myLibrary, and create a new card with corresponding names
  bookContainer.innerHTML = "";
  myLibrary.forEach((book, idx) => {
    let newCard = document.createElement("div");
    newCard.classList.add("book-card");
    newCard.dataset.index = idx;
    newCard.innerHTML = `
    <h2>${myLibrary[idx].title}</h2>
    <h3>${myLibrary[idx].author}</h3>
    <p>${myLibrary[idx].pages}</p>
    <button class="toggle-read">Still Reading</button>
    <button class="remove-book">Remove Book</button>`;
    bookContainer.appendChild(newCard);
  });
  console.log(myLibrary);
}

function addBookToLibrary() {
  let newBook = new Book(
    inputBookTitle.value,
    inputBookAuthor.value,
    inputBookPages.value,
    false
  );
  //push the created obj to MyLibrary
  myLibrary.push(newBook);
  updateDisplay();
}

function removeBook(e) {
  if (e.target.classList.contains("remove-book")) {
    let idx = e.target.parentElement.dataset.index;
    myLibrary.splice(idx, 1);
  }
  updateDisplay();
}

// function removeBook() {
//   [...btnRemoveBook].forEach((button, idx) => {
//     button.addEventListener("click", () => {
//       myLibrary.splice(idx, idx + 1);
//       console.log(`book ${idx} removed!`);
//     });
//   });
// }

//3. Write a function that loops through the library and display them as cards
//4. add a new book function
//5. add a remove book function
//6. add a toggle read status
