const { findAuthorById } = require("./books");

// find accounts by accountId
const findAccountById = (accounts, id) =>  accounts.find((account) => account.id === id);

//sort accounts by thier last name 
const sortAccountsByLastName = (accounts) => {
  return accounts.sort((actA,actB) => actA.name.last.toLowerCase() > actB.name.last.toLowerCase() ? 1 :-1 );
  }

// return the number of times an account has created a 'borrow' record 
function getTotalNumberOfBorrows(account, books) {
  let total = [];
for (let bookNum in books) {
    let tracker = books[bookNum].borrows.find((borrow) => borrow.id === account.id);
    if (tracker) {
      total.push(tracker)
    }
  } 
 return total.length
}

//returns all the books taken out byb an account with the author info 
function getBooksPossessedByAccount(account, books, authors) {
let booksOut = books.filter((book) => {
  return book.borrows.some((borrow) => {
    return borrow.id === account.id && !borrow.returned;
  });
}); 
let result = [];
booksOut.forEach((book) => {
  let author = authors.find((author) => author.id == book.authorId);
  let bookObject = {...book}
  bookObject.author = author
  result.push(bookObject)
})
return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
