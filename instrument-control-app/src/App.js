// // src/App.js
// import React, { useState } from 'react';
// import './App.css';
// import InstrumentList from './components/InstrumentList';
// import ExecutionOrder from './components/ExecutionOrder';
// import ExperimentSettings from './components/ExperimentSettings';

// function App() {
//   const [instruments, setInstruments] = useState([
//     { id: 1, name: 'Thorlabs APT', selected: false, executionOrder: 1 },
//     { id: 2, name: 'LightField', selected: false, executionOrder: 1 },
//     { id: 3, name: 'Keithley 2450', selected: false, executionOrder: 1 },
//     { id: 4, name: 'American Magnets 430', selected: false, executionOrder: 1 },
//   ]);

//   const [initialParams, setInitialParams] = useState('');
//   const [stepSize, setStepSize] = useState();
//   const [totalSteps, setTotalSteps] = useState();

//   const handleInstrumentSelection = (index) => {
//     const updatedInstruments = [...instruments];
//     updatedInstruments[index].selected = !updatedInstruments[index].selected;
//     setInstruments(updatedInstruments);
//   };


//   const handleExecutionOrderChange = (id, value) => {
//     const updatedInstruments = [...instruments];
//     updatedInstruments.find((ele)=> ele.id === id).executionOrder = parseInt(value);
//     setInstruments(updatedInstruments);
//   };
  

//   const handleSettingChange = (field, value) => {
//     switch (field) {
//       case 'initialParams':
//         setInitialParams(value);
//         break;
//       case 'stepSize':
//         setStepSize(parseInt(value));
//         break;
//       case 'totalSteps':
//         setTotalSteps(parseInt(value));
//         break;
//       default:
//         break;
//     }
//   };

//   const isValidPriority = (instruments) => {
//     const seenExecutionOrders = new Set();
//     let isUnique = true;
//     instruments.forEach((inst) => {
//       if (inst.selected) {
//         const executionOrder = inst.executionOrder;
//         if (seenExecutionOrders.has(executionOrder)) {
//           isUnique = false;
//         }
//         seenExecutionOrders.add(executionOrder);
//       }
//     });
//     return isUnique;
//   };

//   const startExperiment = () => {
//     if(isValidPriority(instruments)) {
//       console.log('Experiment started');
//       console.log('Selected Instruments:', instruments);
//       console.log('Initial Parameters:', initialParams);
//       console.log('Step Size:', stepSize);
//       console.log('Total Steps:', totalSteps);
//     } else {
//       console.log(`WRONG! WRONG! WRONG!`);
//     }
//   };

//   return (
//     <div className="App">
//       <h1 className='title'>Instrument Control</h1>
//       <InstrumentList instruments={instruments} handleInstrumentSelection={handleInstrumentSelection} />
//       <ExecutionOrder instruments={instruments} handleExecutionOrderChange={handleExecutionOrderChange} />
//       <ExperimentSettings
//         initialParams={initialParams}
//         stepSize={stepSize}
//         totalSteps={totalSteps}
//         handleSettingChange={handleSettingChange}
//       />
//       <button className="run-experiment-button" onClick={startExperiment}>Run Experiment</button>
//     </div>
//   );
// }

// export default App;


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
import ExperimentSettings from './components/ExperimentSettings';

function App() {
  const [instruments, setInstruments] = useState([
    { id: 1, name: 'Thorlabs APT', selected: false, executionOrder: 1 },
    { id: 2, name: 'LightField', selected: false, executionOrder: 1 },
    { id: 3, name: 'Keithley 2450', selected: false, executionOrder: 1 },
    { id: 4, name: 'American Magnets 430', selected: false, executionOrder: 1 },
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
      console.log('Experiment started');
      console.log('Selected Instruments:', instruments);
      console.log('Initial Parameters:', initialParams);
      console.log('Step Size:', stepSize);
      console.log('Total Steps:', totalSteps);
    } else {
      setIsOpen(true);
    }
    // Implement the logic to interact with the selected instruments
  };

  const onClose = () => setIsOpen(false);

  return (
    <div className="App">
      <h1 className="title">Instrument Control</h1>
      <InstrumentList instruments={instruments} handleInstrumentSelection={handleInstrumentSelection} />
      <ExecutionOrder instruments={instruments} handleExecutionOrderChange={handleExecutionOrderChange} />
      <ExperimentSettings
        initialParams={initialParams}
        stepSize={stepSize}
        totalSteps={totalSteps}
        handleSettingChange={handleSettingChange}
      />
      <button className="run-experiment-button" onClick={startExperiment}>
        Run Experiment
      </button>

      {/* AlertDialog */}
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

