
import React from 'react';
import TableRow from './TableRow';

function Table({ observations }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Observation</th>
        </tr>
      </thead>
      <tbody>
        {observations.map((observation, index) => (
          <TableRow key={index} id={index + 1} observation={observation} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
