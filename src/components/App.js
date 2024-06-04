
import React, { useState } from 'react';
import Table from './Table';


function App() {
  const [observations, setObservations] = useState([]);

  const handleNewObservation = () => {
    const newObservation = `Observation ${observations.length + 1}`;
    setObservations([...observations, newObservation]);
  };

  return (
    <div>
      <h1>Site Observations</h1>
      <Table observations={observations} />
      <button onClick={handleNewObservation}>New Site Observation</button>
    </div>
  );
}

export default App;
