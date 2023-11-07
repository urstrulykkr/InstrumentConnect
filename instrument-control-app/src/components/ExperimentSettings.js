// import React from "react";
// import "../styles/ExperimentSettings.css";

// const ExperimentSettings = ({
//   initialParams,
//   stepSize,
//   totalSteps,
//   handleSettingChange,
// }) => {
//   return (
//     <div className="settings-container">
//       <h3>Experiment Settings:</h3>
//       <form className="settings-container__fields">
//         <table>
//           <tr className="params-container">
//             <td>
//               <label for="initialParams">Initial Parameters:</label>
//             </td>
//             <td>
//               <input
//                 type="text"
//                 id="initialParams"
//                 value={initialParams}
//                 onChange={(e) =>
//                   handleSettingChange("initialParams", e.target.value)
//                 }
//               />
//             </td>
//           </tr>
//           <tr class="step-size-container">
//             <td >
//               <label for="stepSize">Step Size:</label>
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
//           <tr class="total-steps-container">
//             <td >
//               <label for="totalSteps">Total Number of Steps:</label>
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
    <div className="settings-container">
      <h3>Experiment Settings:</h3>
      <form className="settings-container__fields">
        <table>
          <tr className="params-container">
            <td>
              <label htmlFor="initialParams"><div className="dropdown-input">
                <select
                  id="initialParams"
                  value={initialParams}
                  onChange={(e) =>
                    handleSettingChange("initialParams", e.target.value)
                  }
                >
                  <option value="" disabled selected>
                    Select initial parameter
                  </option>
                  {sampleWords.map((word, index) => (
                    <option key={index} value={word}>
                      {word}
                    </option>
                  ))}
                </select>
              </div></label>
            </td>
            <input
                type="text"
                id="initialParamsData"
                value={initialParamsData}
                onChange={(e) =>
                  handleSettingChange("initialParamsData", e.target.value)
                }
              />
            <td>
              
            </td>
          </tr>
          <tr className="step-size-container">
            <td>
              <label htmlFor="stepSize">Step Size:</label>
            </td>
            <td>
              <input
                type="number"
                id="stepSize"
                value={stepSize}
                onChange={(e) =>
                  handleSettingChange("stepSize", e.target.value)
                }
              />
            </td>
          </tr>
          <tr className="total-steps-container">
            <td>
              <label htmlFor="totalSteps">Total Number of Steps:</label>
            </td>
            <td>
              <input
                type="number"
                id="totalSteps"
                value={totalSteps}
                onChange={(e) =>
                  handleSettingChange("totalSteps", e.target.value)
                }
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default ExperimentSettings;
