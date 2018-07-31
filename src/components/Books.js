import React from 'react'
import Book from './Book'

const Books = ({ books, renderBook }) => {
  console.log(books);

  const renderBooks = books.map(book => {
    return <Book key={book.list_id} book={book} renderBook={renderBook} />
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
