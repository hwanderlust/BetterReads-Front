import React from 'react'
import Shelf from './Shelf'

const Shelves = ({ createShelf, currentUser }) => {

  const addShelf = (e) => {
    e.preventDefault()
    const name = e.target.querySelector('input').value
    const userId = 6
    createShelf({name, user_id: userId}).then(data => console.log(data))
  }

  const renderForm = () => {
    return (
      <form onSubmit={e => addShelf(e)}>
        <input placeholder='Shelf name'/>
      </form>
    )
  }

  return (
    <div className='shelves-container'>
      <div className='shelves-header'>
        <h1>{currentUser ? currentUser.username : alert(`You're not logged in!`)}</h1>
        <button>Add Shelf</button>
      </div>
      <div className='shelves-section'>
        <div className='shelf-info'>
          <div className='shelf-cover'></div>
          <div className='shelf-name'>
            <h1 className='vertical-name'>Shelf Name</h1>
          </div>
        </div>
        <div className='shelf-info'>
          <div className='shelf-cover'></div>
          <div className='shelf-name'>
            <h1 className='vertical-name'>Shelf Name</h1>
          </div>
        </div>
        <div className='shelf-info'>
          <div className='shelf-cover'></div>
          <div className='shelf-name'>
            <h1 className='vertical-name'>Shelf Name</h1>
          </div>
        </div>
        <div className='shelf-info'>
          <div className='shelf-cover'></div>
          <div className='shelf-name'>
            <h1 className='vertical-name'>Shelf Name</h1>
          </div>
        </div>
        <div className='shelf-info'>
          <div className='shelf-cover'></div>
          <div className='shelf-name'>
            <h1 className='vertical-name'>Shelf Name</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shelves;
