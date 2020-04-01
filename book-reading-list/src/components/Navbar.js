import React, { useContext } from 'react';
import BookContext from '../contexts/BookContext';

const NavBar = () => {
    const { books } = useContext(BookContext);

    return(
        <div className="navBar">
            <h1>Fahad's Reading List</h1>
            <p>Currently, you have {books.length} books to read...</p>
        </div>
    )

} 

export default NavBar;