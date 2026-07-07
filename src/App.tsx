import { useCallback, useMemo, useState } from 'react'
import BookTable from './components/BookTable'
import { books } from './data/Books';
import type { Book } from './types/types.Book';
import BookForm from './components/BookForm.tsx';
import BookSearchAndFilter from './components/BookSearchAndFilter.tsx'

function App() {

  const [booksList, setBooksList] = useState<Book[]>(books);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectTerm, setSelectTerm] = useState<string>('');
  const [sum, setSum] = useState<number>(0)

  const deleteBookById = useCallback((id: number) => {
    setBooksList(prevBookList =>
      prevBookList.filter(book => book.id !== id)
    )
  }, [])

  const addNewBook = useCallback((newBook: Book) => {
    setBooksList(prevBookList => [...prevBookList, newBook])
  }, [])

  const filterBooks = useMemo(() => {
    let result = booksList.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    if (selectTerm === 'true' || selectTerm === 'false') {
      result = result.filter(book => book.isAvailable.toString() === selectTerm)
    }

    setSum(() => result.map(book => book.price).reduce((a: number,b : number) => a + b, 0))

    return result
  }, [searchTerm, selectTerm, booksList])

  return (<>

    <BookSearchAndFilter
      searchTerm={searchTerm}
      selectTerm={selectTerm}
      setSearchTerm={setSearchTerm}
      setSelectTerm={setSelectTerm}
    />

    <BookTable
      books={filterBooks}
      deleteBook={deleteBookById}
    />

    <BookForm
      addBook={addNewBook}
    />

    <h2> Total salary : {sum}</h2>
  </>
  )
}

export default App
