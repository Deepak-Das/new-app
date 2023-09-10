import logo from './logo.svg';
import './App.css';
import Visualization from './componests/Visualization';
import { datajson1, datajson2, datajson3 } from './componests/datesource';
import VisualizationIcon from './componests/VisualizationIcon';
import { useEffect, useState } from 'react';

function App() {
  

  return (
    <div className="App">
    <h1>D3 Node Visualization</h1>
    {/* <Visualization data={datajson1} /> */}
    {/* <Visualization data={datajson2} /> */}
    <VisualizationIcon data={datajson3} />
  </div>
  );
}

export default App;
