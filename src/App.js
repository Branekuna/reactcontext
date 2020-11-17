import { Navbar } from './components/Navbar';
import { BookContextProvider } from './contexts/BookContext';
import { BookList } from './components/BookList';
import { NewBookForm } from './components/BookForm';

export const App = () => {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
};
