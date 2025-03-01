import { useEffect, useState } from 'react';
import './App.css';

const initialData = [
  {
    wing: '1',
    bosses: [
      {
        boss: 'Sammy',
        entries: [
          {
            id: 1,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, deserunt?',
          },
          { id: 2, description: 'Lorem ipsum dolor sit amet consectetur' },
        ],
      },
      {
        boss: 'Chess',
        entries: [
          {
            id: 1,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, deserunt?',
          },
          { id: 2, description: 'Lorem ipsum dolor sit amet consectetur' },
        ],
      },
    ],
  },
  {
    wing: '2',
    bosses: [
      {
        boss: 'Sab',
        entries: [{ id: 1, description: 'Lorem ipsum dolor sit amet ' }],
      },
      {
        boss: 'VB',
        entries: [
          {
            id: 1,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, deserunt?',
          },
          { id: 2, description: 'Lorem ipsum dolor sit amet consectetur' },
          { id: 3, description: 'Lorem ipsum dolor sit' },
        ],
      },
    ],
  },
];

function App() {
  const [data, setData] = useState(initialData);

  const [wing, setWing] = useState('1');
  const [boss, setBoss] = useState('');
  const [entries, setEntries] = useState('');

  function handleAddEncounter(item) {
    console.log('adding: ', item);
    setData((prevItems) => [...prevItems, item]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newEncounter = {
      wing,
      boss,
      entries,
    };

    console.log(wing);
    console.log(boss);
    console.log(entries);

    handleAddEncounter(newEncounter);
    setBoss('');
    setEntries('');
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
        {data.map((wing) => (
          <li key={wing.wing}>
            <h2>Wing {wing.wing}</h2>
            {wing.bosses.map((boss) => (
              <div key={boss.boss}>
                <h3>{boss.boss}</h3>
                {boss.entries.map((entry) => (
                  <p key={entry.id}>{entry.description}</p>
                ))}
              </div>
            ))}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>Wing: </label>
        <select onChange={(e) => setWing(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>

        <label>Boss: </label>
        <input
          type="text"
          value={boss}
          onChange={(e) => setBoss(e.target.value)}
        />

        <label>Input</label>
        <input
          type="text"
          value={entries}
          onChange={(e) => setEntries(e.target.value)}
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
