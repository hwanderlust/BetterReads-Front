import React from 'react'
import Book from './Book'

const Books = props => {
  console.log('books loaded');
  return (
    <div className='books-section'>
      <Book />
      <div className='book-1'>Book 1</div>
      <div className='book-2'>Book 2</div>
      <div className='book-3'>Book 3</div>
      <div className='book-4'>Book 4</div>
      <div className='book-5'>Book 5</div>
      <div className='book-6'>Book 6</div>
    </div>
  );
}

export default Books;
