import { useState } from 'react'
import { library } from './mocks/books.json'
import './App.css'

function App() {
  const [filters, setFilters] = useState({
    search: '',
    genre: '',
    maxPages: 0,
  })

  const filterBooks = (library) => {
    return library.filter(({ book }) => {
      return book.title.toLowerCase().includes(filters.search.toLowerCase())
        && (filters.genre === '' || book.genre === filters.genre)
        && (filters.maxPages === 0 || book.pages <= filters.maxPages)
    })
  }
  return (
    <>
      <header>
        <h1 className='book-header-title'>BookStore</h1>
      </header>
      <section className='filters'>
        <form className='filters-form' action="">
          <input type="text" placeholder="Buscar..." value={ filters.search } onChange={ (e) => setFilters({ ...filters, search: e.target.value }) } />
          <select value={ filters.genre } onChange={ (e) => setFilters({ ...filters, genre: e.target.value }) }>
            <option value="">Todos los géneros</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia Ficción</option>
            <option value="Terror">Terror</option>
            <option value="Zombies">Zombies</option>
          </select>
          <div>
            <input type="range" min='0' max='1200' placeholder="Máx. páginas" value={ filters.maxPages } onChange={ (e) => setFilters({ ...filters, maxPages: e.target.value }) } />
          </div>
        </form>
      </section>
      <section className='book-list'>
        { filterBooks(library).map(({ book }) => {
          return (
            <div key={ book.ISBN } className="book">
              <img src={ book.cover } alt={ `Portada de ${book.title}` } />
              <h2>{ book.title }</h2>
            </div>
          )
        }) }
      </section>
    </>
  )
}

export default App