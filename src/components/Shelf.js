import React from 'react'
import Book from './Book'

const Shelf = props => {

  const renderSpines = () => {
    // map over list of books
    // render <div className='spine'>Spine</div>
  }

  const renderBooks = () => {
    // map over list of books
    // render <div className='book'>Book</div>
  }

  return (
    <div className='shelf'>
      <section className='spines'>
        <div className='spine'>Spine 1</div>
        <div className='spine'>Spine 2</div>
        <div className='spine'>Spine 3</div>

      </section>
      <main className='books-list'>
        <div className='book'>Book 1</div>
        <div className='book'>Book 2</div>
        <div className='book'>Book 3</div>
        <div className='book'>Book 4</div>
        <div className='book'>Book 5</div>
      </main>
    </div>
  )
}

export default Shelf;
