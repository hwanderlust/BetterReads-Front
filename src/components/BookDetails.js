import React from 'react'

const BookDetails = ({ book }) => {
  console.log(book);
  return (
    <div>
      <h1>{book.books[0].title}</h1>
      <img src={book.books[0].book_image} />
      <h3>{book.books[0].author}</h3>
      <p>{book.books[0].description}</p>
    </div>
  )
}

export default BookDetails
