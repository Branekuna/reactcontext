import { observer } from 'mobx-react-lite';
import { RootStoreContext, useBookStore } from '../contexts/RootStore';

export const Navbar = observer(() => {
  const { booksLength } = useBookStore(RootStoreContext);
  return (
    <div className='navbar'>
      <h1>Reading List</h1>
      <p>Currently we have {booksLength} books to get through...</p>
    </div>
  );
});
