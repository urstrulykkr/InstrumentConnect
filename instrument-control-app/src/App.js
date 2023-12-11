

import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import './App.css';
import InstrumentList from './components/InstrumentList';
import ExecutionOrder from './components/ExecutionOrder';
import DetectorList from './components/DataCollection';

function App() {
  const [instruments, setInstruments] = useState([
    { id: 1, name: 'Thorlabs APT #1', selected: false, executionOrder: 1 },
    { id: 2, name: 'Thorlabs APT #2', selected: false, executionOrder: 1 },
    { id: 3, name: 'Thorlabs APT #3', selected: false, executionOrder: 1 },
    { id: 4, name: 'Keithley 2450 #1', selected: false, executionOrder: 1 },
    { id: 5, name: 'Keithley 2450 #2', selected: false, executionOrder: 1 },
    { id: 6, name: 'Keithley 2450 #3', selected: false, executionOrder: 1 },
    { id: 7, name: 'American Magnets 430 #1', selected: false, executionOrder: 1 },
    { id: 8, name: 'American Magnets 430 #2', selected: false, executionOrder: 1 },
    { id: 9, name: 'American Magnets 430 #3', selected: false, executionOrder: 1 },
  ]);  

  const [detectors, setDetectors] = useState([
    { id: 1, name: 'LightField', selected: false, executionOrder: 1 },
  ]);

  const [initialParams, setInitialParams] = useState('');
  const [stepSize, setStepSize] = useState();
  const [totalSteps, setTotalSteps] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = React.useRef();

  const handleInstrumentSelection = (index) => {
    const updatedInstruments = [...instruments];
    updatedInstruments[index].selected = !updatedInstruments[index].selected;
    setInstruments(updatedInstruments);
  };

  const handleDetectorSelection = (index) => {
    const updatedDetectors = [...detectors];
    updatedDetectors[index].selected = !updatedDetectors[index].selected;
    setDetectors(updatedDetectors);
  }

  const handleExecutionOrderChange = (id, value) => {
    const updatedInstruments = [...instruments];
    updatedInstruments.find((ele) => ele.id === id).executionOrder = parseInt(value);
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

  const isValidPriority = (instruments) => {
    const seenExecutionOrders = new Set();
    let isUnique = true;
    instruments.forEach((inst) => {
      if (inst.selected) {
        const executionOrder = inst.executionOrder;
        if (seenExecutionOrders.has(executionOrder)) {
          isUnique = false;
        }
        seenExecutionOrders.add(executionOrder);
      }
    });
    return isUnique;
  };

  const startExperiment = () => {
    if (isValidPriority(instruments)) {
      console.log("ALL GOOD!")
    } else {
      setIsOpen(true);
    }
  };

  const onClose = () => setIsOpen(false);

  return (
    <div className="App">
      <h1 className="title">Instrument Control</h1>
      <div className='operations'>
      <InstrumentList instruments={instruments} handleInstrumentSelection={handleInstrumentSelection} />
      <DetectorList detectors={detectors} handleDetectorSelection={handleDetectorSelection} />
      </div>
      <ExecutionOrder instruments={instruments} handleExecutionOrderChange={handleExecutionOrderChange} />


      <button className="run-experiment-button" onClick={startExperiment}>
        Run Experiment
      </button>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Invalid Priority
            </AlertDialogHeader>

            <AlertDialogBody>
              The execution order for selected instruments must be unique. Please adjust the priorities.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default App;

