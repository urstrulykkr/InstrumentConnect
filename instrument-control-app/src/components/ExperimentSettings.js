


import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Input,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import "../styles/ExperimentSettings.css";

const ExperimentSettings = ({
  initialParams,
  initialParamsData,
  stepSize,
  totalSteps,
  handleSettingChange,
}) => {
  const sampleWords = ["Voltage", "Angle", "Magnetic Field", "Position (mm)"];

  return (
    <Box className="settings-container">
      <Heading as="h3">Experiment Settings:</Heading>
      <FormControl className="settings-container__fields">
        <Table>
          <Tbody>
            <Tr className="params-container">
              <Td>
                <FormLabel htmlFor="initialParams">
                  <Box className="dropdown-input">
                    <Select
                      id="initialParams"
                      value={initialParams}
                      onChange={(e) =>
                        handleSettingChange("initialParams", e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select initial parameter
                      </option>
                      {sampleWords.map((word, index) => (
                        <option key={index} value={word}>
                          {word}
                        </option>
                      ))}
                    </Select>
                  </Box>
                </FormLabel>
              </Td>
              <Td>
                <Input
                  type="text"
                  id="initialParamsData"
                  value={initialParamsData}
                  onChange={(e) =>
                    handleSettingChange("initialParamsData", e.target.value)
                  }
                />
              </Td>
            </Tr>
            <Tr className="step-size-container">
              <Td>
                <FormLabel htmlFor="stepSize">Step Size:</FormLabel>
              </Td>
              <Td>
                <Input
                  type="number"
                  id="stepSize"
                  value={stepSize}
                  onChange={(e) =>
                    handleSettingChange("stepSize", e.target.value)
                  }
                />
              </Td>
            </Tr>
            <Tr className="total-steps-container">
              <Td>
                <FormLabel htmlFor="totalSteps">
                  Total Number of Steps:
                </FormLabel>
              </Td>
              <Td>
                <Input
                  type="number"
                  id="totalSteps"
                  value={totalSteps}
                  onChange={(e) =>
                    handleSettingChange("totalSteps", e.target.value)
                  }
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </FormControl>
    </Box>
  );
};

export default ExperimentSettings;

