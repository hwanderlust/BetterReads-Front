import React from 'react'
import BookDetails from './BookDetails'

const Book = ({ bookNo, book, renderBook }) => {
  console.log('book loaded', renderBook);

  const handleClick = () => {
    renderBook(book)
  }

  return (
    <div
      onClick={handleClick}
      className={bookNo}
      style={{background: 'url(' + book.image + ')'}}
      >

      </div>
  );
}

export default Book;

// style={{background: 'url(' + book.books[0].book_image + ')'}}
