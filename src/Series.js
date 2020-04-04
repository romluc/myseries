import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

const Series = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/api/series').then((res) => {
      setData(res.data.data);
    });
  });

  const deleteSerie = (id) => {
    axios.delete(`/api/series/${id}`).then((res) => {
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
            onClick={() => deleteSerie(record.id)}
          >
            Remove
          </button>

          <Link to={`/series/${record.id}`} className='btn btn-warning ml-1'>
            Edit
          </Link>
        </td>
      </tr>
    );
  };

  if (!data.length) {
    return (
      <div className='container'>
        <h1>Series</h1>
        <Link to='/series/new' className='btn btn-info mb-2'>
          Add new
        </Link>
        <div className='alert alert-warning' role='alert'>
          No series created yet!
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Series</h1>
      <div>
        <Link to='/series/new' className='btn btn-info mb-2'>
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

export default Series;
