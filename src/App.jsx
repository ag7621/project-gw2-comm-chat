import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const bosses = [
  { name: 'sammy', entries: [] },
  { name: 'sab', entries: [] },
  { name: 'gor', entries: [] },
];

function App() {
  const [data, setData] = useState(bosses);

  const [selectedBoss, setSelectedBoss] = useState('sammy');
  const [newEntry, setNewEntry] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newId = uuidv4();
    console.log(newId);
    console.log(selectedBoss);
    console.log(newEntry);

    setData((prevData) =>
      prevData.map((boss) =>
        boss.name === selectedBoss
          ? {
              ...boss,
              entries: [...boss.entries, { id: newId, entry: newEntry }],
            }
          : boss
      )
    );
  }

  useEffect(() => {
    console.log('data change: ', data);
    data.forEach((item) => {
      console.log(item);
    });
  }, [data]);

  return (
    <div>
      <h1>GW2 Comm Buddy 🦦</h1>

      <ul>
        {data.map((boss) => (
          <li key={boss.name}>
            <h2>{boss.name}</h2>
            {boss.entries.map((entry) => (
              <p key={entry.id}>{entry.entry}</p>
            ))}
          </li>
        ))}
      </ul>

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

        <label>Entry: </label>
        <input
          type="text"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
