import { useLocalObservable } from 'mobx-react-lite';
import { v4 } from 'uuid';

export const BookStoreContext = () => {
  const store = useLocalObservable(() => ({
    //initial state: books
    books: [{ title: 'Blabla', author: 'blablabla', id: 1 }],
    //actions: addBook, removeBook
    addBook(title, author) {
      store.books.push({ title, author, id: v4.apply() });
    },
    removeBook(id) {
      store.books = store.books.filter((book) => book.id !== id);
    },
    //computeds
    get booksLength() {
      console.log('books length', store.books.length);
      return store.books.length;
    },
  }));
  return store;
};
