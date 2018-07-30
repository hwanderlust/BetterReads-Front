import React from 'react'
import Book from './Book'

const Books = ({ books, renderBook }) => {
  console.log(books);
  let bookNum = 0
  const renderBooks = books.slice().splice(0,5).map(book => {
    ++bookNum
    return <Book key={book.list_id} bookNo={`book-${bookNum}`} book={book} renderBook={renderBook} />
  })

  return (
    <div className='books-section'>
      { renderBooks }
    </div>
  );
}

export default Books;
