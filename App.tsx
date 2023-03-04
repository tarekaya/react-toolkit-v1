import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form';
import Sidebar from './components/Sidebar/Sidebar';

export default function App() {
  const { state } = useSelector((state) => state.user);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Form />
        name = {state.name}
      </div>
    </div>
  );
}
