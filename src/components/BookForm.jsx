import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: Date.now(), title, author };
        dispatch(addBook(newBook));
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div className="text-center"> {/* Center the button */}
                <button type="submit" className="btn btn-primary">Add Book</button>
            </div>
        </form>
    );
};

export default BookForm;
