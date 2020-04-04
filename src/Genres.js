import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

const Genres = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/api/genres').then((res) => {
      setData(res.data.data);
    });
  });

  const deleteGenre = (id) => {
    axios.delete(`/api/genres/${id}`).then((res) => {
      const filtered = data.filter((item) => id !== item.id);
      setData(filtered);
    });
  };

  const renderLine = (record) => {
    return (
      <tr key={record.id}>
        <th scope='row'>{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button
            className='btn btn-danger'
            onClick={() => deleteGenre(record.id)}
          >
            Remove
          </button>

          <Link to={`/genres/${record.id}`} className='btn btn-warning ml-1'>
            Edit
          </Link>
        </td>
      </tr>
    );
  };

  if (!data.length) {
    return (
      <div className='container'>
        <h1>Genres</h1>
        <Link to='/genres/new' className='btn btn-info mb-2'>
          Add new
        </Link>
        <div className='alert alert-warning' role='alert'>
          No genres created yet!
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Genres</h1>
      <div>
        <Link to='/genres/new' className='btn btn-info mb-2'>
          Add new
        </Link>
      </div>
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
