import React from 'react'

const BookDetails = ({ book }) => {
  console.log(book);
  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.image} />
      <h3>{book.author}</h3>
      <p>{book.description}</p>
    </div>
  )
}

export default BookDetails
