let btnAddBook = document.querySelector("#add-book");
let bookContainer = document.querySelector(".book-container");
let inputBookTitle = document.getElementById("book-title");
let inputBookAuthor = document.querySelector("#book-author");
let inputBookPages = document.querySelector("#book-pages");
let btnToggleRead = document.querySelector("#toggle-read");
let btnRemoveBook = document.getElementsByClassName("remove-book");

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
  // the constructor...
}

function updateDisplay(newBook) {
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
  updateDisplay(newBook);
  //update the book container DOM
}

function removeBook() {
  return true;
}

btnAddBook.addEventListener("click", addBookToLibrary);
btnRemoveBook.addEventListener("click", removeBook);

//3. Write a function that loops through the library and display them as cards
//4. add a new book function
//5. add a remove book function
//6. add a toggle read status
