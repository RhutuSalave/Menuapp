import React from 'react';
import Menu from './components/Menu';
import { MenuProvider } from './context/MenuContext';
import './styles.css';

function App() {
  return (
    <MenuProvider>
      <div className="App">
        <Menu />
      </div>
    </MenuProvider>
  );
}

export default App;
