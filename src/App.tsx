import { useCallback, useEffect, useState } from 'react'
import BookTable from './components/BookTable'
import { books } from './data/Books';
import type { Book } from './types/types.Book';
import BookForm from './components/BookForm.tsx';
import BookSearchAndFilter from './components/BookSearchAndFilter.tsx'

function App() {

  const [booksList, setBooksList] = useState<Book[]>(books);

  const deleteBookById = useCallback((id: number) => {
    setBooksList(prevBookList =>
      prevBookList.filter(book => book.id !== id)
    )
  }, [])

  const addNewBook = useCallback((newBook: Book) => {
    setBooksList(prevBookList => [...prevBookList, newBook])
  }, [])

  return (<>

    <BookSearchAndFilter />


    <BookTable
      books={booksList}
      deleteBook={deleteBookById}
    />

    <BookForm
      addBook={addNewBook}
    />
  </>
  )
}

export default App
