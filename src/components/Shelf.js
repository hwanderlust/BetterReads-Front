import React from 'react'

const Shelf = ({shelf, renderBook}) => {

  const showBook = (book) => {
    renderBook(book)
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
        { shelf[1].map(book => <div onClick={() => showBook(book)}><img className='book' src={book.image} /></div> ) }
      </section>
    </div>
  )
}

export default Shelf;
