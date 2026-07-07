import { useCallback, useEffect, useState } from 'react'
import BookTable from './components/BookTable'
import { books } from './data/Books';
import type { Book } from './types/types.Book';

function App() {

  const [booksList, setBooksList] = useState<Book[]>(books);

  const deleteBookById = useCallback((id: number) => {
    setBooksList(prevBookList => 
      prevBookList.filter(book => book.id !== id)
    )
  }, [])

  return (<>

    <BookTable
      books={booksList}
      deleteBook={deleteBookById}
    />
  </>
  )
}

export default App
