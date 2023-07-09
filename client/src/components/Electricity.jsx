import React, { useState } from "react";
import styles from "../styles";

const Electricity = () => {
  const [lala, setLala] = useState(null);
  const [energyInput, setEnergyInput] = useState("0");
  const [showOutput, setShowOutput] = useState(false);

  const apiTesting = () => {
    const API_KEY = "8R0EBEAR0948TTJ9WAFJ8S6MKHTE"; // Replace with your actual API key

    fetch("https://beta4.api.climatiq.io/estimate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        emission_factor: {
          activity_id: "electricity-supply_grid-source_residual_mix",
          data_version: "^1",
        },
        parameters: {
          energy: Number(energyInput), // Convert energyInput to a number
          energy_unit: "kWh",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLala(data); // Update the state with the response data
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };

  const handleEnergyChange = (event) => {
    setEnergyInput(event.target.value); // Update the energyInput state with the user input
  };

  const handleCalculateClick = () => {
    apiTesting();
    setShowOutput(true); // Show the output after clicking Calculate
  };

  return (
    <div className="section">
      

      <div className="calculator-bg">

        <div className="p-6">
          <h1 className={`${styles.texts1} p-2 `}>Amount Of Energy Consumed</h1>
          <input
            className="input-field p-6"
            type="number"
            value={energyInput}
            onChange={handleEnergyChange}
          />
        </div>

        <div className="p-6">
          <button className="calculate" onClick={handleCalculateClick}>
            <h3 className={`${styles.texts2} p-2 `}>Calculate</h3>
          </button>
        </div>

      </div>
      
      <div className="div mt-10">
        
        <div className="output-field ">
        <h2 className={`${styles.texts1} p-6`}>
        Your Carbon offset is :
        {showOutput && <>{lala && <p>{lala.co2e}</p>}</>}
        </h2>
        </div>
      </div>

    </div>
  );
};

export default Electricity;
