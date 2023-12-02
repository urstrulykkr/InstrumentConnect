import React from 'react';
import { Switch } from '@chakra-ui/react'
import '../styles/DataCollection.css'
import {
  FormControl,
  Heading,
  FormLabel,
} from '@chakra-ui/react'

const DetectorList = ({ detectors, handleDetectorSelection }) => {
  return (
    <div className='detectors-list-container'>
      <FormControl>
        <FormLabel className='detectors-list-container__title'>
        <Heading as="h3">
          Select detectors:
        </Heading></FormLabel>
        <div className='list'>
          {detectors.map((detectors, index) => (
            <div key={index}>
              <Switch
                id={detectors.name}
                name={detectors.name}
                isChecked={detectors.selected}
                onChange={() => handleDetectorSelection(index)}
              >
                {detectors.name}
              </Switch>
            </div>
          ))}
        </div>
      </FormControl>
    </div>
  );
};

export default DetectorList;
