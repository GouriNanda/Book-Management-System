
import './App.css'
import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
    return (
        <div className="app container mt-4">
            <h1 className='text-dark text-center' style={{fontFamily:"cursive"}}>Book Management System</h1>
            <BookForm />
            <BookList />
        </div>
    );
};

export default App;
