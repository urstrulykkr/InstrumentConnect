
import React, { useState } from 'react';
import '../styles/ExecutionOrder.css';
import {
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import ThorlabsAPT from './ThorlabsAPT'; // Import your custom components
import Keithley from './Keithley';
import AmericanMagnets from './AmericanMagnets';
// import ComponentD from './ComponentD';

const ExecutionOrder = ({ instruments, handleExecutionOrderChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [currentComponent, setCurrentComponent] = useState(null);

  const openModal = (instrument) => {
    setSelectedInstrument(instrument);
    setIsOpen(true);
    // Set the appropriate component based on the selected instrument
    setCurrentComponent(getComponentForInstrument(instrument));
  };

  const closeModal = () => {
    console.log('data must be saved');
    setSelectedInstrument(null);
    setIsOpen(false);
    setCurrentComponent(null); // Reset the current component when closing the modal
  };

  const getComponentForInstrument = (instrument) => {
    if (instrument.name.includes("Thorlabs APT")) {
      return <ThorlabsAPT />;
    } else if (instrument.name.includes('Keithley')) {
      return <Keithley/>;
    } else if (instrument.name.includes('American Magnets')) {
      return <AmericanMagnets/>;
    }
  
    return null;
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
            <Button
              className='settings-button'
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
            {/* Render the current component in the modal */}
            {currentComponent}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ExecutionOrder;
