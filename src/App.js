import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const HeaderText = (props) => {
  return (
  <div>
    <p className='header-name'>{props.name}</p>
    <p className='header-text'>{props.text}</p>
  </div>
  )
}

const App = () => {
  const name = 'Kristján Sigurðsson'
  const text = 'Þjónustufulltrúi, Nemandi, Knattspyrnuahugamaður'
  return (
    <div className="App">
      <header className="App-header">
        <HeaderText name={name} text={text} />
      </header>
    </div>
  );
}

export default App;
