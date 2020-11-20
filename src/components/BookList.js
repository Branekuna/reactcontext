import { observer } from 'mobx-react-lite';
import { RootStoreContext, useBookStore } from '../contexts/RootStore';
import { BookDetails } from './BookDetails';

export const BookList = observer(() => {
  const { books, booksLength } = useBookStore(RootStoreContext);
  return booksLength ? (
    <div className='book-list'>
      <ul>
        {books.map((book) => {
          return <BookDetails key={book.id} book={book} />;
        })}
      </ul>
    </div>
  ) : (
    <div className='empty'>No books to read. Hello free time! :D</div>
  );
});
