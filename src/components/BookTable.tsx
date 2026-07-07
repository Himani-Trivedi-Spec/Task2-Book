import type { BookTabelProps } from "./types.BookTableProps";
import React from "react";


function BookTable({
    books,
    deleteBook,
}
    : BookTabelProps) {

    return (
        <div className="book-table">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Availability</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {books && books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>
                                {book.isAvailable ? "Available" : "Unavailable"}
                            </td>
                            <td>
                                <button onClick={() => deleteBook(book.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default React.memo(BookTable);