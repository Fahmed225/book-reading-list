import React, { useContext } from "react";
import {BookContext} from '../contexts/BookContext';
import BookDetails from './BookDetails';
 
const BookList = () => {
    const { books } = useContext(BookContext);

    return books.length ? 
    (<div className="book-list">
        <ul>
            {books.map(book => {
                return (<BookDetails book={book} key={book.id} /> );
            })} 
        </ul>
    </div>)
    : //no books
    (<div className="empty">No books to read. Time to visit the local library...</div>)
}
export default BookList;