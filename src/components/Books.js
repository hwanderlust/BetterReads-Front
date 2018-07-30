import React from 'react'
import Book from './Book'

const Books = ({ bestSellers, renderBook }) => {
  console.log(bestSellers);

  let bookNum = 0
  const renderBooks = bestSellers.map(book => {
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
