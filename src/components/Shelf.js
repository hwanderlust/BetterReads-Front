import React from 'react'

const Shelf = ({shelf}) => {

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
      {console.log(shelf[1])}
      <header className='shelf-header'>
        <h1>{shelf[0].name}</h1>
      </header>
      <aside className='spines'>
        { shelf[1].map(book => <div className='spine'>{book.title}</div>) }
      </aside>
      <section className='books-list'>
        { shelf[1].map(book => <div><img className='book' src={book.image} /></div> ) }
      </section>
    </div>
  )
}

export default Shelf;
