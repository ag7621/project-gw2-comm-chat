import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const bosses = [
  { name: 'Vale Guardian', entries: [] },
  { name: 'Spirit Woods', entries: [] },
  { name: 'Gorseval', entries: [] },
  { name: 'Sabetha', entries: [] },
  { name: 'Slothasor', entries: [] },
  { name: 'Bandit Trio', entries: [] },
  { name: 'Matthias', entries: [] },
  { name: 'Escort', entries: [] },
  { name: 'Keep Construct', entries: [] },
  { name: 'Twisted Castle', entries: [] },
  { name: 'Xera', entries: [] },
  { name: 'Cairn', entries: [] },
  { name: 'Mursaat Overseer', entries: [] },
  { name: 'Samarog', entries: [] },
  { name: 'Deimos', entries: [] },
  { name: 'Soulless Horror', entries: [] },
  { name: 'River of Souls', entries: [] },
  { name: 'Statues of Grenth', entries: [] },
  { name: 'Dhuum', entries: [] },
  { name: 'Conjured Amalgamate', entries: [] },
  { name: 'Twin Largos', entries: [] },
  { name: 'Qadim', entries: [] },
  { name: 'Gate of Ahdashim', entries: [] },
  { name: 'Cardinal Adina', entries: [] },
  { name: 'Cardinal Sabir', entries: [] },
  { name: 'Qadim the Peerless', entries: [] },
];

function App() {
  const [data, setData] = useState(bosses);

  const [selectedBoss, setSelectedBoss] = useState('Vale Guardian');
  const [newEntry, setNewEntry] = useState('');
  const [count, setCount] = useState(0);

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

  // useEffect(() => {
  //   console.log('data change: ', data);
  //   data.forEach((item) => {
  //     console.log(item);
  //   });
  // }, [data]);

  return (
    <div>
      <h1>GW2 Comm Buddy 🦦</h1>

      <ul>
        {data.map((boss) =>
          boss.entries.length > 0 ? (
            <li key={boss.name}>
              <h2>{boss.name}</h2>
              {boss.entries.map((entry) => (
                <p key={entry.id}>{entry.entry}</p>
              ))}
            </li>
          ) : null
        )}
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
        <br />
        <label>Entry: </label>
        {/* <input
          type="text"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        /> */}
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
