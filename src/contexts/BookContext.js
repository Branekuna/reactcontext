import { createContext, useReducer } from 'react';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
