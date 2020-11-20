import { Navbar } from './components/Navbar';
import { BookList } from './components/BookList';
import { NewBookForm } from './components/BookForm';
import { RootStoreContextProvider } from './contexts/RootStore';

export const App = () => {
  return (
    <div className='App'>
      <RootStoreContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </RootStoreContextProvider>
    </div>
  );
};
