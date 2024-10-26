import React, { createContext, useState } from 'react';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  const addMenuItem = (newItem, parentId = null) => {
    const addItem = (items) => {
      if (!parentId) {
        return [...items, newItem];
      }
      return items.map(item => {
        if (item.id === parentId) {
          return {
            ...item,
            children: item.children ? addItem(item.children) : [newItem],
          };
        } else if (item.children) {
          return { ...item, children: addItem(item.children) };
        }
        return item;
      });
    };
    setMenu(addItem(menu));
  };

  const updateMenuItem = (updatedItem) => {
    const updateItem = (items) =>
      items.map(item =>
        item.id === updatedItem.id
          ? updatedItem
          : { ...item, children: item.children ? updateItem(item.children) : [] }
      );
    setMenu(updateItem(menu));
  };

  const deleteMenuItem = (id) => {
    const removeItem = (items) =>
      items.filter(item => item.id !== id)
        .map(item => ({ ...item, children: item.children ? removeItem(item.children) : [] }));
    setMenu(removeItem(menu));
  };

  return (
    <MenuContext.Provider value={{ menu, addMenuItem, updateMenuItem, deleteMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
