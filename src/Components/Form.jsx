import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ onAddEntry, bossList }) {
  const [selectedBoss, setSelectedBoss] = useState('Vale Guardian');
  const [newEntry, setNewEntry] = useState('');
  const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const newId = uuidv4();
    const newEnter = { id: newId, entry: newEntry };

    console.log(newEnter);

    onAddEntry(selectedBoss, newEnter);

    setNewEntry('');
  }

  function handleOnChange(e) {
    setCount(e.target.value.length);
    setNewEntry(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>
          info to be entered: {selectedBoss} - {newEntry}
        </h2>

        <label>Boss: </label>
        <select onChange={(e) => setSelectedBoss(e.target.value)}>
          {bossList.map((boss) => (
            <option key={boss.name} value={boss.name}>
              {boss.name}
            </option>
          ))}
        </select>

        <br />

        <label>Entry: </label>
        <textarea
          rows={4}
          cols={50}
          maxLength={199}
          value={newEntry}
          onChange={handleOnChange}
        />

        <button>Add</button>

        <p>{count}/199</p>
      </form>
    </div>
  );
}

export default Form;
