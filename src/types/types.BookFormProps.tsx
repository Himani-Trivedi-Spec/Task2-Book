import type { Book } from "./types.Book"

export interface BookFormProps {
    addBook : (book : Book) => void
}