import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  HStack,
  FormErrorMessage,
} from '@chakra-ui/react';

const Keithley = () => {
  const [formData, setFormData] = useState({
    voltage: '',
    angle: '',
    stepSize: '',
    numberOfSteps: '',
    position: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const validateField = (name, value) => {
    // Basic validation, you can customize this based on your requirements
    if (name === 'stepSize' && !/^\d+(\.\d+)?$/.test(value)) {
      return 'Step size must be a number';
    }

    if (['angle', 'voltage', 'position', 'numberOfSteps'].includes(name) && !/^\d+(\.\d+)?$/.test(value)) {
      return 'Field must be a number';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const error = validateField(name, value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = () => {
    const errors = {};
    Object.keys(formData).forEach((name) => {
      const error = validateField(name, formData[name]);
      if (error) {
        errors[name] = error;
      }
    });
    setFormErrors(errors);
  
    if (Object.keys(errors).length === 0) {
    console.log('Form values:', formData);
    }
  };

  return (
    <VStack spacing={4}>
      <FormControl isInvalid={!!formErrors.voltage}>
        <FormLabel>Voltage</FormLabel>
        <Input
          type="number"
          name="voltage"
          value={formData.voltage}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{formErrors.voltage}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!formErrors.stepSize}>
        <FormLabel>Step Size</FormLabel>
        <Input
          type="number"
          name="stepSize"
          value={formData.stepSize}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{formErrors.stepSize}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!formErrors.numberOfSteps}>
        <FormLabel>Number of Steps</FormLabel>
        <Input
          type="text"
          name="numberOfSteps"
          value={formData.numberOfSteps}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{formErrors.numberOfSteps}</FormErrorMessage>
      </FormControl>

      <HStack>
        <Button colorScheme="blue" onClick={handleSubmit}>
          Save
        </Button>
      </HStack>
    </VStack>
  );
};

export default Keithley;