import React, { useState } from 'react';
import EditBookForm from './EditBookForm';

const BookItem = ({ book, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="card mb-3">
            <div className="card-body">
                {isEditing ? (
                    <EditBookForm book={book} setIsEditing={setIsEditing} />
                ) : (
                    <>
                        <h5 className="card-title fw-bold" style={{ color: 'black' }}>Title: {book.title}</h5>
                        <p className="card-text">Author: {book.author}</p>
                        <div className="d-flex">
                            <button className="btn btn-dark me-2" onClick={() => setIsEditing(true)}>Edit</button>
                            <button className="btn btn-danger delete-button" onClick={onDelete}>Delete</button>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BookItem;
