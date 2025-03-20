import { useState } from 'react'
import { library } from './mocks/books.json'
import './App.css'

function App() {
  return (
    <>
      <div className='book-list'>
        { library.map(({ book }) => {
          return (
            <div key={ book.ISBN } className="book">
              <img src={ book.cover } alt={ `Portada de ${book.title}` } />
              <h2>{ book.title }</h2>
            </div>
          )
        }) }
      </div>
    </>
  )
}

export default App