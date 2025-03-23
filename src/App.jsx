import { useState } from 'react';

import './App.css';
import bossArray from './Data';
import CopyButton from './Components/CopyButton';
import Form from './Components/Form';

function App() {
  const [data, setData] = useState(bossArray);

  const [filteredList, setFilteredList] = useState('Vale Guardian');

  function handleAddEntry(selectedBoss, newEnter) {
    setData((prevData) =>
      prevData.map((boss) =>
        boss.name === selectedBoss
          ? {
              ...boss,
              entries: [...boss.entries, newEnter],
            }
          : boss
      )
    );
  }

  function handleDelete(entryId, bossName) {
    setData((prevData) =>
      prevData.map((boss) =>
        boss.name === bossName
          ? {
              ...boss,
              entries: boss.entries.filter((entry) => entry.id !== entryId),
            }
          : boss
      )
    );
  }

  return (
    <div className="container">
      <h1>GW2 Comm Buddy 🦦</h1>

      <select onChange={(e) => setFilteredList(e.target.value)}>
        {data.map((boss) => (
          <option key={boss.name} value={boss.name}>
            {boss.name}
          </option>
        ))}
      </select>

      <div className="list-container">
        {data.map((boss) =>
          boss.entries.length > 0 ? (
            <ol key={boss.name}>
              <h2>{boss.name}</h2>
              {boss.entries.map((entry) => (
                <li key={entry.id}>
                  <p>{entry.entry}</p>
                  <button onClick={() => handleDelete(entry.id, boss.name)}>
                    Delete
                  </button>
                  <CopyButton text={entry.entry} />
                </li>
              ))}
            </ol>
          ) : null
        )}
      </div>

      <hr />

      <Form onAddEntry={handleAddEntry} bossList={data} />
    </div>
  );
}

export default App;
