import { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

export const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Book Title'
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type='text'
        placeholder='Author Name'
        value={author}
        required
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type='submit' />
    </form>
  );
};
