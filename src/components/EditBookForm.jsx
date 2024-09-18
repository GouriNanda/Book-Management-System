import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '../redux/bookSlice';

const EditBookForm = ({ book, setIsEditing }) => {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = { ...book, title, author };
        dispatch(editBook({ id: book.id, updatedBook }));
        setIsEditing(false);
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
            <button type="submit" className="btn btn-primary">Update Book</button>
            <button type="button" className="btn btn-dark delete-button ms-2" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
    );
};

export default EditBookForm;
