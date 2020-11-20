import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { BookContext } from '../contexts/BookContext';

export const Navbar = observer(() => {
  const { booksLength } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Reading List</h1>
      <p>Currently we have {booksLength} books to get through...</p>
    </div>
  );
});
