import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {Title: "The Cat in the Hat", Author: "Dr. Suess", id: 1},
        {Title: "Harry Potter and the Philosopher's Stone", Author: "J. K. Rowling", id: 2}
    ]);

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid() }]);
    };

    const removeBook = id => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;