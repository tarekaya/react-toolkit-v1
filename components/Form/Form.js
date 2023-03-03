import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <form>
      <div className="form-group">
        <input type="text" placeholder="Enter Name" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Enter LastName" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="City" />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email" />
      </div>
      <div className="form-group">
        <input type="submit" placeholder="Add User" />
      </div>
    </form>
  );
}
