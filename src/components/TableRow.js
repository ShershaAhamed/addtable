
import React from 'react';

function TableRow({ id, observation }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{observation}</td>
    </tr>
  );
}

export default TableRow;
