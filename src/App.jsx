import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import bossArray from './Data';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  function handleCopyText() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button onClick={handleCopyText}>{copied ? 'Copied!' : 'Copy text'}</button>
  );
}

function App() {
  const [data, setData] = useState(bossArray);

  const [selectedBoss, setSelectedBoss] = useState('Vale Guardian');
  const [newEntry, setNewEntry] = useState('');
  const [count, setCount] = useState(0);

  const [filteredList, setFilteredList] = useState('Vale Guardian');

  function handleSubmit(e) {
    e.preventDefault();

    const newId = uuidv4();
    const newEnter = { id: newId, entry: newEntry };

    console.log(newEnter);

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
    setNewEntry('');
  }

  function handleOnChange(e) {
    setCount(e.target.value.length);
    setNewEntry(e.target.value);
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

      <form onSubmit={handleSubmit}>
        <h2>
          info to be entered: {selectedBoss} - {newEntry}
        </h2>

        <label>Boss: </label>
        <select onChange={(e) => setSelectedBoss(e.target.value)}>
          {data.map((boss) => (
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

export default App;
