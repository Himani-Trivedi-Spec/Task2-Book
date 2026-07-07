import type { Book } from "../types/types.Book"

export interface BookTabelProps {
    books: Book[],
    deleteBook : (id : number) => void;
    count?:number
}