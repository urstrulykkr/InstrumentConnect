

import React from 'react';
import '../styles/ExecutionOrder.css';
import {
  Heading,
  Tag
} from '@chakra-ui/react'

const ExecutionOrder = ({ instruments, handleExecutionOrderChange }) => {
  const selectedInstruments = instruments.filter((instrument) => instrument.selected);

  return (
    <div className='execute-container'>
      <Heading as="h3" className='execute-container__title'>Set Execution Order in Queue:</Heading>
      <ul className='execute-container__order'>
        {selectedInstruments.map((instrument) => (
          <li key={`executionOrder_${instrument.id}`}>
            <Tag colorScheme='cyan' size='md'>{instrument.name}</Tag>:
            <select
              className='execute-container__order__select'
              value={instrument.executionOrder}
              onChange={(e) => handleExecutionOrderChange(instrument.id, e.target.value)}
            >
              {selectedInstruments.map((selectedInstrument, selectedIndex) => (
                <option key={`priority_${selectedInstrument.id}_${selectedIndex}`} value={selectedIndex + 1}>
                  Priority {selectedIndex + 1}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExecutionOrder;

