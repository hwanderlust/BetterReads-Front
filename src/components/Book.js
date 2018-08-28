import React from 'react'

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
      <img src={book.image} alt='book cover for certain book being displayed based on fetch from API' />
    </div>
  );
}

export default Book;
