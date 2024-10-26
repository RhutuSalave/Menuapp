import React, { useContext, useState } from 'react';
import { MenuContext } from '../context/MenuContext';
import MenuItemForm from './MenuItemForm';
import MenuList from './MenuList';

const Menu = () => {
  const { addMenuItem } = useContext(MenuContext);
  const [formVisible, setFormVisible] = useState(false);

  const handleAddItem = (newItem) => {
    addMenuItem({ ...newItem, id: Date.now(), children: [] });
    setFormVisible(false);

  };


  return (
    <div>

      <h3>You Enter in Foodies World</h3>
      <h1>"Dynamic Menu Builder"</h1>

      <button onClick={() => setFormVisible(!formVisible)}>Add Menu Item</button>
      {formVisible && <MenuItemForm onSave={handleAddItem} />}

      <MenuList />
    </div>
  );
};

export default Menu;
