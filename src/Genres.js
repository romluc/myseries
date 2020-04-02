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
  return (
    <div>
      <h1>Genres</h1>
      <Table dark>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
          </tr>
        </tbody>
      </Table>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default Genres;
