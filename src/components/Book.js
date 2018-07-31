import React from 'react'
import BookDetails from './BookDetails'

const Book = ({ bookNo, book, renderBook }) => {

  const handleClick = () => {
    renderBook(book)
  }

  const hover = (e) => {
    // e.target.style += `width: 15em; height: 15em;`
    // e.target.ownerDocument.body.style.opacity += `0.5`
  }

  const stopHover = (e) => {
    // e.target.style = `transform: scale(1, 1)`
    // e.target.ownerDocument.body.style.opacity= `1`
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={(e) => hover(e)}
      onMouseLeave={(e) => stopHover(e)}
      className='book'
    >
      <img src={book.image} />
    </div>
  );
}

export default Book;
