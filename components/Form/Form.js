import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Form.css';

export default function Form() {
  const [name, setName] = useState('');
  const [firstName, setfirstName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, firstName, email, city }));
  };
  return (
    <form onSubmit={handleSubmit(e)}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter LastName"
          onChange={(e) => setfirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input type="submit" placeholder="Add User" />
      </div>
    </form>
  );
}
