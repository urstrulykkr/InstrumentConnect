

import React from 'react';
import '../styles/ExecutionOrder.css';

const ExecutionOrder = ({ instruments, handleExecutionOrderChange }) => {
  const selectedInstruments = instruments.filter((instrument) => instrument.selected);

  return (
    <div className='execute-container'>
      <h3 className='execute-container__title'>Set Execution Order in Queue:</h3>
      <ul className='execute-container__order'>
        {selectedInstruments.map((instrument, index) => (
          <li key={`executionOrder_${instrument.id}`}>
            {instrument.name}:
            <select
              className='execute-container__order__select'
              value={instrument.executionOrder}
              onChange={(e) => handleExecutionOrderChange(index, e.target.value)}
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
