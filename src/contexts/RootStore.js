import { createContext, useContext } from 'react';
import { BookStoreContext } from './BookContext';

export const RootStoreContext = createContext();

export const RootStoreContextProvider = ({ children }) => {
  //declare separate stores like bookStore
  const bookStore = BookStoreContext();

  return (
    //pass in any stores like bookStore
    <RootStoreContext.Provider value={{ bookStore: bookStore }}>
      {children}
    </RootStoreContext.Provider>
  );
};

//when you want more than one store in a component use this hook
export const useRootStore = () => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error('useRootStore found no such store.');
  }
  return store;
};

//declare and export Hooks for specific stores in components for ease of destructuring
export const useBookStore = () => {
  //get the store you want (declared up in .Provider value={{someStore}})
  const { bookStore } = useContext(RootStoreContext);
  if (!bookStore) {
    throw new Error('useBookStore found no such store.');
  }
  //return this store if it exists (error especially useful with Typescript)
  return bookStore;
};
