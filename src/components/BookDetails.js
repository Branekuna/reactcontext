import { RootStoreContext, useBookStore } from '../contexts/RootStore';

export const BookDetails = ({ book }) => {
  const { removeBook } = useBookStore(RootStoreContext);

  return (
    <li onClick={() => removeBook(book.id)}>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  );
};
