import { useState } from 'react';
import './App.css';
import arrayOfArtifacts from './artifacts.json';

function App() {
  const [count, setCount] = useState(0);

  console.log('Array of Artifacts', arrayOfArtifacts);
  const alphabeticalSortFunction = (a, b) => a.name.localeCompare(b.name);

  const sortedArrayOfArtifacts = arrayOfArtifacts.sort(alphabeticalSortFunction);

  return (
    <>
      <h1>NW Builder</h1>
      <div style={{ width: '100%', height: '80vh', border: '2px solid black', overflowY: 'scroll' }}>
        <label htmlFor="artifact">Pick your Artifact</label>
        <select id="artifact">
          {sortedArrayOfArtifacts.map(artifact => {
            const artifactDamage = artifact.damage ? artifact.damage : '';
            const artifactDamageType = artifact.damageType ? artifact.damageType : '';
            return (
              <option
                style={{ width: '100%' }}
                key={artifact.name}
                value={`${artifact.name}`}
              >{`${artifact.name} ${artifact.slot} ${artifactDamage} ${artifactDamageType}`}</option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default App;
