import { useCallback, useEffect, useState } from 'react'
import BookTable from './components/BookTable'
import { books } from './data/Books';
import type { Book } from './types/types.Book';
import BookForm from './components/BookForm.tsx';
import BookSearchAndFilter from './components/BookSearchAndFilter.tsx'

function App() {

  const [booksList, setBooksList] = useState<Book[]>(books);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectTerm, setSelectTerm] = useState<string>('');

  const deleteBookById = useCallback((id: number) => {
    setBooksList(prevBookList =>
      prevBookList.filter(book => book.id !== id)
    )
  }, [])

  const addNewBook = useCallback((newBook: Book) => {
    setBooksList(prevBookList => [...prevBookList, newBook])
  }, [])

  const filterBooks = () => {
    let result = booksList.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))    
    if(selectTerm === 'true' || selectTerm === 'false') {
      result = result.filter(book => book.isAvailable.toString() === selectTerm)
    }
    console.log(result);
  }

  useEffect(filterBooks, [searchTerm, selectTerm])

  return (<>

    <BookSearchAndFilter
      searchTerm={searchTerm}
      selectTerm={selectTerm}
      setSearchTerm={setSearchTerm}
      setSelectTerm={setSelectTerm}
    />

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
