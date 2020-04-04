import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const InfoSeries = ({ match }) => {
  const [name, setName] = useState('');
  const [success, setSuccess] = useState('');

  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`/api/series/${match.params.id}`).then((res) => {
      setData(res.data);
    });
  }, [match.params.id]);

  const onChange = (evt) => {
    setName(evt.target.value);
  };

  const save = () => {
    axios
      .post('/api/series', {
        name,
      })
      .then((res) => {
        setSuccess(true);
      });
  };

  if (success) {
    return <Redirect to='/series' />;
  }

  return (
    <div className='container'>
      <h1 className='mt-3'>New Series</h1>
      <pre>{JSON.stringify(data)}</pre>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          value={name}
          onChange={onChange}
          className='form-control'
          id='name'
          placeholder='Enter new series'
        />
      </div>
      <button type='button' onClick={save} className='btn btn-primary'>
        Submit
      </button>
    </div>
  );
};

export default InfoSeries;
