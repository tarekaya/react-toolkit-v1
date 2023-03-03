import * as React from 'react';
import './style.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form';
import Sidebar from './components/Sidebar/Sidebar';

export default function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Form />
    </div>
  );
}
