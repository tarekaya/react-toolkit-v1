import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <form>
      <div className="form-group">
        <input type="text" placeholder="enter name" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="enter lastName" />
      </div>
      <div className="form-group">
        <input type="submit" placeholder="enter city" />
      </div>
    </form>
  );
}
