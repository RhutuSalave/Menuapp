import React, { useState } from 'react';

const MenuItemForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [parentId, setParentId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, parentId: parentId ? parseInt(parentId) : null });
    setTitle('');
    setParentId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Parent ID (optional):
        <input type="number" value={parentId} onChange={(e) => setParentId(e.target.value)} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default MenuItemForm;
