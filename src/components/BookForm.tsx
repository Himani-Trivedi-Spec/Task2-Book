import React from "react";
import type { BookFormProps } from "../types/types.BookFormProps";

function BookForm({ addBook }: BookFormProps) {

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const newBook: Book = {
            id: Number((form.elements.namedItem('id') as HTMLInputElement).value),
            title: (form.elements.namedItem('title') as HTMLInputElement).value,
            author: (form.elements.namedItem('author') as HTMLInputElement).value,
            price: Number((form.elements.namedItem('price') as HTMLInputElement).value),
            isAvailable: (form.elements.namedItem('isAvailable') as HTMLInputElement).value,
        }
        form.reset()
        addBook(newBook)
    }

    return (
        <div className="book-form">
            <h2>Add Book</h2>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="id">Book ID:</label>
                <input type="number" id="id" name="id" required />
                <br />

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />
                <br />

                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" required />
                <br />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" required />
                <br />

                <label>Availability:</label>

                <input
                    type="radio"
                    id="available"
                    name="isAvailable"
                    value="true"
                    required
                />
                <label htmlFor="available">Available</label>

                <input
                    type="radio"
                    id="notAvailable"
                    name="isAvailable"
                    value="false"
                />
                <label htmlFor="notAvailable">Not Available</label>

                <br />

                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}


export default React.memo(BookForm)