import React from 'react';
import '../styles/InstrumentList.css'

const InstrumentList = ({ instruments, handleInstrumentSelection }) => {
  return (
    <div className='instrument-list-container'>
      <h3 className='instrument-list-container__title'>Select Instruments:</h3>
      <div className='list'>
      {instruments.map((instrument, index) => (
            <div key={index}>
            <input
                type="checkbox"
                id={instrument.name}
                name={instrument.name}
                checked={instrument.selected}
                onChange={() => handleInstrumentSelection(index)}
            />
            <label htmlFor={instrument.name}>{instrument.name}</label>
            </div>
      ))}
     </div>
    </div>
  );
};

export default InstrumentList;
