import { useEffect, useState } from 'react';
import './App.css';

const initialData = [
  {
    wing: '1',
    boss: 'sammy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, deserunt?',
  },
];

function App() {
  const [data, setData] = useState(initialData);

  const [wing, setWing] = useState('1');
  const [boss, setBoss] = useState('');
  const [description, setDescription] = useState('');

  function handleAddEncounter(item) {
    console.log('adding: ', item);
    setData((prevItems) => [...prevItems, item]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newEncounter = {
      wing,
      boss,
      description,
    };

    console.log(wing);
    console.log(boss);
    console.log(description);

    handleAddEncounter(newEncounter);
    setBoss('');
    setDescription('');
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
      <div>
        <ul>
          {data.map((item) => {
            return (
              <li>
                <h2>wing: {item.wing}</h2>
                <h3>boss: {item.boss}</h3>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
