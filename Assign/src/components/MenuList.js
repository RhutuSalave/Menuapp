
import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import './MenuList.css';

const MenuList = () => {
  const { menu, deleteMenuItem, updateMenuItem } = useContext(MenuContext);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this menu item ?")) {
      deleteMenuItem(id);
    }
  };

  const handleUpdate = (id) => {
    const updatedTitle = prompt("Enter new title:");
    if (updatedTitle) {
      updateMenuItem({ id, title: updatedTitle, children: [] });
    }
  };

  const renderMenu = (items) => (
    <ul>
      {items.map(item => (
        <li key={item.id} className="menu-item">
          <span className="item-title">{item.title}</span>
          <div className="button-group">
            <button className="edit-button" onClick={() => handleUpdate(item.id)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
          {item.children && renderMenu(item.children)}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {renderMenu(menu)}
    </div>
  );
};

export default MenuList;
