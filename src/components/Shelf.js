import React from 'react'
import Book from './Book'

const Shelf = props => {
  console.log('shelf loaded');
  return (
    <div className='shelf'>
      <section className='spines'>
        <div className='spine'>Spine 1</div>
        <div className='spine'>Spine 2</div>
        <div className='spine'>Spine 3</div>
        <div className='spine'>Spine 4</div>
        <div className='spine'>Spine 5</div>
        <div className='spine'>Spine 6</div>
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
