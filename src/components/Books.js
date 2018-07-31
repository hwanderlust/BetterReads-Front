import React from 'react'
import Book from './Book'

const Books = ({ books, renderBook }) => {

  const renderBooks = books.map(book => {
    return <Book book={book} renderBook={renderBook} />
  })

  return (
    <div className='books-container'>
      <div className='books-section'>
        { renderBooks }
      </div>
    </div>
      );
}

export default Books;
