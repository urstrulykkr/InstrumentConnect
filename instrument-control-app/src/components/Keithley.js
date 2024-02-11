import React, { useState, useEffect } from 'react';
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
  const getInitialFormData = () => {
    const savedData = localStorage.getItem('keithleyFormData');
    return savedData
      ? JSON.parse(savedData)
      : {
          voltage: '',
          angle: '',
          stepSize: '',
          numberOfSteps: '',
          limitCurrent: '',
        };
  };

  const [formData, setFormData] = useState(getInitialFormData);
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

  useEffect(() => {
    // Save form data to localStorage whenever it changes
    localStorage.setItem('keithleyFormData', JSON.stringify(formData));
  }, [formData]);

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
        <FormErrorMessage>{formErrors.angle}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!formErrors.angle}>
        <FormLabel>Angle</FormLabel>
        <Input
          type="number"
          name="angle"
          value={formData.angle}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{formErrors.angle}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!formErrors.position}>
        <FormLabel>Limit Current</FormLabel>
        <Input
          type="number"
          name="position"
          value={formData.limitCurrent}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{formErrors.position}</FormErrorMessage>
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
