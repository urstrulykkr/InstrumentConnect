import React from 'react';
import '../styles/InstrumentList.css'
import { Switch } from '@chakra-ui/react'
import {
  FormControl,
  Heading,
  FormLabel,
} from '@chakra-ui/react'

const InstrumentList = ({ instruments, handleInstrumentSelection }) => {
  return (
    <div className='instrument-list-container'>
      <FormControl>
      {/* <Heading className='execute-container__title'>Set Execution Order in Queue:</Heading> */}
        <FormLabel className='instrument-list-container__title'>
        <Heading as="h3">
          Select Instruments:
        </Heading></FormLabel>
        <div className='list'>
          {instruments.map((instrument, index) => (
            <div key={index}>
              <Switch
                id={instrument.name}
                name={instrument.name}
                isChecked={instrument.selected}
                onChange={() => handleInstrumentSelection(index)}
              >
                {instrument.name}
              </Switch>
            </div>
          ))}
        </div>
      </FormControl>
    </div>
  );
};

export default InstrumentList;
