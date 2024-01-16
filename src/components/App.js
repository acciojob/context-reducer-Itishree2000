import React from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import Header from './Header';
import List from './List';

function App() {
  return (
    <ContextProvider>
      <div className="app-container">
        <Header />
        <List />
      </div>
    </ContextProvider>
  );
}

export default App;


