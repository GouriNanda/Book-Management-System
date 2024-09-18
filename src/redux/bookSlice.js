import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
        editBook: (state, action) => {
            const { id, updatedBook } = action.payload;
            const index = state.findIndex(book => book.id === id);
            if (index !== -1) {
                state[index] = updatedBook;
            }
        },
        deleteBook: (state, action) => {
            return state.filter(book => book.id !== action.payload);
        },
    },
});

// Export actions and reducer
export const { addBook, editBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
