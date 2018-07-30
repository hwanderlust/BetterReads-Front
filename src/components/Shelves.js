import React from 'react'
import Shelf from './Shelf'

const Shelves = props => {
  console.log('shelves loaded');

  const addShelf = (e) => {
    e.preventDefault()
    const name = e.target.querySelector('input').value
    const userId = 6
    console.log('clicked', name);
    props.createShelf({name, user_id: userId}).then(data => console.log(data))
  }

  return (
    <div>
      <button>Add Shelf</button>
      <form onSubmit={e => addShelf(e)}>
        <input placeholder='Shelf name'/>
      </form>
      <div className='shelf-book-cover-top-left'></div>
      <div className='shelf-top-left book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
      <div className='shelf-book-cover-top-right'></div>
      <div className='shelf-top-right book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
      <div className='shelf-book-cover-bottom-left'></div>
      <div className='shelf-bottom-left book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
      <div className='shelf-book-cover-bottom-right'></div>
      <div className='shelf-bottom-right book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
    </div>
  )
}

export default Shelves;
