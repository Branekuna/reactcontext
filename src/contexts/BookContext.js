import { createContext, useContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import { v4 } from 'uuid';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    //state: books
    books: [],
    //actions: addBook, removeBook
    addBook(title, author) {
      store.books.push({ title, author, id: v4.apply() });
    },
    removeBook(id) {
      store.books = store.books.filter((book) => book.id !== id);
    },
    //computed
    get booksLength() {
      console.log('books length', store.books.length);
      return store.books.length;
    },
  }));
  return <BookContext.Provider value={store}>{children}</BookContext.Provider>;
};

export const useBookStore = () => {
  const store = useContext(BookContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
