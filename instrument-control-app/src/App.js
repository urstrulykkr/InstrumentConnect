// src/App.js
import React, { useState } from 'react';
import './App.css';
import InstrumentList from './components/InstrumentList';
import ExecutionOrder from './components/ExecutionOrder';
import ExperimentSettings from './components/ExperimentSettings';

function App() {
  const [instruments, setInstruments] = useState([
    { id: 1, name: 'Thorlabs APT', selected: false, executionOrder: '' },
    { id: 2, name: 'LightField', selected: false, executionOrder: '' },
    { id: 3, name: 'Keithley 2450', selected: false, executionOrder: '' },
    { id: 4, name: 'American Magnets 430', selected: false, executionOrder: '' },
  ]);

  const [initialParams, setInitialParams] = useState('');
  const [stepSize, setStepSize] = useState();
  const [totalSteps, setTotalSteps] = useState();

  const handleInstrumentSelection = (index) => {
    const updatedInstruments = [...instruments];
    updatedInstruments[index].selected = !updatedInstruments[index].selected;
    setInstruments(updatedInstruments);
  };


  const handleExecutionOrderChange = (id, value) => {
    const updatedInstruments = [...instruments];
    updatedInstruments.find((ele)=> ele.id === id).executionOrder = parseInt(value);
    setInstruments(updatedInstruments);
  };
  

  const handleSettingChange = (field, value) => {
    switch (field) {
      case 'initialParams':
        setInitialParams(value);
        break;
      case 'stepSize':
        setStepSize(parseInt(value));
        break;
      case 'totalSteps':
        setTotalSteps(parseInt(value));
        break;
      default:
        break;
    }
  };

  const startExperiment = () => {
    // Implement the logic to interact with the selected instruments
    console.log('Experiment started');
    console.log('Selected Instruments:', instruments);
    console.log('Initial Parameters:', initialParams);
    console.log('Step Size:', stepSize);
    console.log('Total Steps:', totalSteps);
  };

  return (
    <div className="App">
      <h1 className='title'>Instrument Control</h1>
      <InstrumentList instruments={instruments} handleInstrumentSelection={handleInstrumentSelection} />
      <ExecutionOrder instruments={instruments} handleExecutionOrderChange={handleExecutionOrderChange} />
      <ExperimentSettings
        initialParams={initialParams}
        stepSize={stepSize}
        totalSteps={totalSteps}
        handleSettingChange={handleSettingChange}
      />
      <button className="run-experiment-button" onClick={startExperiment}>Run Experiment</button>
    </div>
  );
}

export default App;

