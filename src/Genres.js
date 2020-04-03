import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

const Genres = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/api/genres').then(res => {
      setData(res.data.data);
    });
  });

  const renderLine = record => {
    return (
      <tr key={record.id}>
        <th scope='row'>{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button>+</button>
        </td>
      </tr>
    );
  };

  if (!data.length) {
    return (
      <div className='container'>
        <h1>Genres</h1>
        <div className='alert alert-warning' role='alert'>
          No genres created yet!
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Genres</h1>
      <Table dark>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        <tbody>{data.map(renderLine)}</tbody>
      </Table>
    </div>
  );
};

export default Genres;
