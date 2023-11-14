
// import React from "react";
// import "../styles/ExperimentSettings.css";

// const ExperimentSettings = ({
//   initialParams,
//   initialParamsData,
//   stepSize,
//   totalSteps,
//   handleSettingChange,
// }) => {
//   const sampleWords = ["Voltage", "Angle", "Sample3", "Sample4"];

//   return (
//     <div className="settings-container">
//       <h3>Experiment Settings:</h3>
//       <form className="settings-container__fields">
//         <table>
//           <tr className="params-container">
//             <td>
//               <label htmlFor="initialParams"><div className="dropdown-input">
//                 <select
//                   id="initialParams"
//                   value={initialParams}
//                   onChange={(e) =>
//                     handleSettingChange("initialParams", e.target.value)
//                   }
//                 >
//                   <option value="" disabled selected>
//                     Select initial parameter
//                   </option>
//                   {sampleWords.map((word, index) => (
//                     <option key={index} value={word}>
//                       {word}
//                     </option>
//                   ))}
//                 </select>
//               </div></label>
//             </td>
//             <input
//                 type="text"
//                 id="initialParamsData"
//                 value={initialParamsData}
//                 onChange={(e) =>
//                   handleSettingChange("initialParamsData", e.target.value)
//                 }
//               />
//             <td>
              
//             </td>
//           </tr>
//           <tr className="step-size-container">
//             <td>
//               <label htmlFor="stepSize">Step Size:</label>
//             </td>
//             <td>
//               <input
//                 type="number"
//                 id="stepSize"
//                 value={stepSize}
//                 onChange={(e) =>
//                   handleSettingChange("stepSize", e.target.value)
//                 }
//               />
//             </td>
//           </tr>
//           <tr className="total-steps-container">
//             <td>
//               <label htmlFor="totalSteps">Total Number of Steps:</label>
//             </td>
//             <td>
//               <input
//                 type="number"
//                 id="totalSteps"
//                 value={totalSteps}
//                 onChange={(e) =>
//                   handleSettingChange("totalSteps", e.target.value)
//                 }
//               />
//             </td>
//           </tr>
//         </table>
//       </form>
//     </div>
//   );
// };

// export default ExperimentSettings;


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
  const sampleWords = ["Voltage", "Angle", "Sample3", "Sample4"];

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

