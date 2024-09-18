import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/bookSlice';
import BookItem from './BookItem';

const BookList = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    return (
        <div className="book-list">
            {books.map((book) => (
                <BookItem
                    key={book.id}
                    book={book}
                    onDelete={() => dispatch(deleteBook(book.id))}
                />
            ))}
        </div>
    );
};

export default BookList;
