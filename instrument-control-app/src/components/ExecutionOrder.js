

import React, { useState } from 'react';
import '../styles/ExecutionOrder.css';
import {
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import ExperimentSettings from './ExperimentSettings'; // Make sure to provide the correct path to your ExperimentSettings component

const ExecutionOrder = ({ instruments, handleExecutionOrderChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState(null);

  const openModal = (instrument) => {
    setSelectedInstrument(instrument);
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log('data must be saved');
    setSelectedInstrument(null);
    setIsOpen(false);
  };

  const selectedInstruments = instruments.filter((instrument) => instrument.selected);

  return (
    <div className='execute-container'>
      <Heading as="h3" className='execute-container__title'>
        Set Execution Order in Queue:
      </Heading>
      <ul className='execute-container__order'>
        {selectedInstruments.map((instrument) => (
          <li key={`executionOrder_${instrument.id}`}>
            <Button className='settings-button'
              size='md'
              onClick={() => openModal(instrument)}
            >
              {instrument.name}
            </Button>
            :
            <select
              className='execute-container__order__select'
              value={instrument.executionOrder}
              onChange={(e) => handleExecutionOrderChange(instrument.id, e.target.value)}
            >
              {selectedInstruments.map((selectedInstrument, selectedIndex) => (
                <option
                  key={`priority_${selectedInstrument.id}_${selectedIndex}`}
                  value={selectedIndex + 1}
                >
                  Priority {selectedIndex + 1}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />    
        <ModalContent>
          <ModalHeader>{selectedInstrument?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Include the ExperimentSettings component here */}
            <ExperimentSettings 
              initialParams={ExperimentSettings.initialParams}
              initialParamsData={ExperimentSettings.initialParamsData}
              stepSize={ExperimentSettings.stepSize}
              totalSteps={ExperimentSettings.totalSteps}
              handleSettingChange={ExperimentSettings.handleExecutionOrderChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Execute
            </Button>
            {/* You can add additional buttons here */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ExecutionOrder;
