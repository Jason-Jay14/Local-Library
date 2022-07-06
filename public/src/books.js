// find author by authorId
const findAuthorById = (authors, id) => authors.find((author) => author.id == id);
// find book by bookId
const findBookById = (books, id) => books.find((book) => book.id === id);

// array of total number of borrowed books and returned books
function partitionBooksByBorrowedStatus(books) {
  let borrowedArr = books.filter((book) => !book.borrows[0].returned);
  let returnArr = books.filter((book) => book.borrows[0].returned);
  let partitionArr = [borrowedArr, returnArr];
    return partitionArr;
}

// return with all borrowers and their info and return status
function getBorrowersForBook(book, accounts) {
  let borrowers = book.borrows.map(borrower => {
    let account = accounts.find((account) => account.id === borrower.id);
    return {...borrower, ... account}
  });
  return borrowers.slice(0,10)
}

 

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
