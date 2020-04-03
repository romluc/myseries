import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const EditGenre = props => {
  const [name, setName] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    axios.get('/api/genres/1').then(res => {
      setName(res.data.name);
    });
  }, []);

  console.log(props);

  const onChange = evt => {
    setName(evt.target.value);
  };

  const save = () => {
    axios
      .post('/api/genres', {
        name
      })
      .then(res => {
        setSuccess(true);
      });
  };

  if (success) {
    return <Redirect to='/genres' />;
  }

  return (
    <div className='container'>
      <h1 className='mt-3'>Edit Genre</h1>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          value={name}
          onChange={onChange}
          className='form-control'
          id='name'
          placeholder='Enter new Genre'
        />
      </div>
      <button type='button' onClick={save} className='btn btn-primary'>
        Submit
      </button>
    </div>
  );
};

export default EditGenre;
