import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const HeaderText = (props) => {
  return (
  <div>
    <p className='header-name'>{props.name}</p>
    <p className='header-text'>{props.text}</p>
    <img className='img' src='me.jpg' />
  </div>
  )
}

const myCv = {
  name: 'Kristján Sigurðsson',
  text: 'Þjónustufulltrúi, Nemi, Knattspyrnuáhugamaður',
  jobs: [
    {
      name: 'Samskip HF',
      time: '2020 enn að.',
      text: 'Þjónustufulltrúi, sé um samskipti við viðskiptavini, skráningar í birgðakerfi ásamt tilfallandi verkefnum.'
    },
    {
      name: 'Samskip HF',
      time: '2014 - 2020',
      text: 'Lyftaramaður, vann við lestun og losun frystigáma og fráganf inn í frystiklefa í frystigeymslu Samskipa.'
  },
  {
    name: 'Vinnslustöð Vestmannaeyja',
    time: '2010 - 2014',
    text: 'Lyftaramaður, sá um pökkun og frágang frystivöru og skráningar í birgðir í fristiklefa.'
}
  ]
}


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderText className='header' name={myCv.name} text={myCv.text} />
        <hr className='line'/>
        <p className='job-name'>{myCv.jobs[0].name}</p>
        <p className='job-time'>{myCv.jobs[0].time}</p>
        <p className='job-text'>{myCv.jobs[0].text}</p>
        <p className='job-name'>{myCv.jobs[1].name}</p>
        <p className='job-time'>{myCv.jobs[1].time}</p>
        <p className='job-text'>{myCv.jobs[1].text}</p>
        <p className='job-name'>{myCv.jobs[2].name}</p>
        <p className='job-time'>{myCv.jobs[2].time}</p>
        <p className='job-text'>{myCv.jobs[2].text}</p>
      </header>
    </div>
  );
}

export default App;
