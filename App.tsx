import * as React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form';
import Sidebar from './components/Sidebar/Sidebar';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
}
