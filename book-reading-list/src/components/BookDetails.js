import React, { useContext } from 'react';
import {BookContext} from '../contexts/BookContext';

const BookDetails = ({book, id}) => {
    const { removeBook } = useContext(BookContext);

    return (
        <li>
            <div className="title">{book.Title}</div>
            <div className="author">{book.Author}</div>
        </li>
    )
}

export default BookDetails;