let btnAddBook = document.querySelector("#add-book");
let bookContainer = document.querySelector(".book-container");
let inputBookTitle = document.getElementById("book-title");
let inputBookAuthor = document.querySelector("#book-author");
let inputBookPages = document.querySelector("#book-pages");
let btnToggleRead = document.querySelector("#toggle-read");
let btnRemoveBook = document.getElementsByClassName("remove-book");

let myLibrary = [];

btnAddBook.addEventListener("click", addBookToLibrary);
btnToggleRead.addEventListener("click", setReadStatus);
document.addEventListener("click", toggleRead);
document.addEventListener("click", removeBook);

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

//if the modal button contains read, return read
function setReadStatus() {
  if (!btnToggleRead.classList.contains("read")) {
    btnToggleRead.classList.toggle("read");
    return false;
  }
  if (btnToggleRead.classList.contains("read")) {
    btnToggleRead.classList.toggle("read");
    return true;
  }
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
    <button class="toggle-read ${checkIfRead(idx)}">Still Reading</button>
    <button class="remove-book">Remove Book</button>`;
    bookContainer.appendChild(newCard);
  });
}

function checkIfRead(idx) {
  if (myLibrary[idx].isRead) {
    return "read";
  } else {
    return "unread";
  }
}

function addBookToLibrary() {
  let newBook = new Book(
    inputBookTitle.value,
    inputBookAuthor.value,
    inputBookPages.value,
    btnToggleRead.classList.contains("read")
  );
  //push the created obj to MyLibrary
  // updateDisplay();
  myLibrary.push(newBook);
}

function removeBook(e) {
  if (e.target.classList.contains("remove-book")) {
    let idx = e.target.parentElement.dataset.index;
    myLibrary.splice(idx, 1);
  }
  updateDisplay();
}

function toggleRead(e) {
  if (e.target.classList.contains("toggle-read")) {
    let idx = e.target.parentElement.dataset.index;
    if (!myLibrary[idx].isRead) {
      e.target.classList.toggle("read");
      myLibrary[idx].isRead = true;
    } else {
      e.target.classList.toggle("read");
      myLibrary[idx].isRead = false;
    }
  }
  console.log(myLibrary);
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
