// total amount of books
const getTotalBooksCount = (books) => books.length;

// total amount of accounts 
const getTotalAccountsCount = (accounts) => accounts.length;

// total amount of borrowed books
const getBooksBorrowedCount = (books) => books.reduce((acc, book) => acc +( book.borrows[0].returned ? 0:1), 0 );

//helper Function for bottom three functions
//sorting for top five
 function _topFive (order) { 
  let result = order.sort((pointA, pointB) => (pointA.count < pointB.count ? 1:-1)).slice(0,5);
  return result 
 }


// return a list of most common genres
// top five genres 
function getMostCommonGenres(books) {
  const topGenres = [];
  for (let book of books) {
    let genre = topGenres.find((genresName) => genresName.name === book.genre);
    if (genre) {
      genre.count++;
    } else {
      topGenres.push({ name: book.genre, count: 1})
    } 
  }
  return _topFive(topGenres)
}


//return a list of most popular books
// top five books
function getMostPopularBooks(books) {
  let topBooks = [];
   for (let book of books) {
    let popular = book.borrows.length
    let bestBooks = topBooks.find((popularBooks) => popularBooks.name === book);
    if (bestBooks) {
      bestBooks.count++;
    } else {
      topBooks.push({ name: book.title, count: popular});
    }
   }
   return _topFive(topBooks)
}



// return a list of most popular authors
// top five authors 
function getMostPopularAuthors(books, authors) {
  let topAuthors = [];
  for (let author of authors) {
    let authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
    let authorList = { name: authorName, count: count};
    topAuthors.push(authorList);

  }
return _topFive(topAuthors)
}





module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
