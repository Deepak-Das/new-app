import logo from './logo.svg';
import './App.css';
import Visualization from './componests/Visualization';

function App() {
  return (
    <div className="App">
    <h1>D3 Node Visualization</h1>
    <Visualization data={{
  entities: [
    {
      name: "T1I1 Trial",
      type: "clinical-trial",
      properties: {
        stage: "Stage 1",
      },
    },
    {
      name: "S1 Site",
      type: "Site-Hospital",
      properties: {
        address: "1 Main St",
      },
    },
    // Add more entities as needed
  ],
  levels: [
    {
      seq: 1,
      entities: [
        {
          name: "T1I1 Trial",
        },
        // Add more entities to the level as needed
      ],
    },
  ],
  connections: [
    {
      Start: "T1I1 Trial",
      End: "S1 Site",
      Type: "Association-Rect",
      Properties: {},
    },
    // Add more connections as needed
  ],
}} />
  </div>
  );
}

export default App;
