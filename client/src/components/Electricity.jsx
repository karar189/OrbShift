import React, { useState } from "react";
import styles from "../styles";

const Electricity = () => {
  const [lala, setLala] = useState(null);
  const [energyInput, setEnergyInput] = useState("0");
  const [showOutput, setShowOutput] = useState(false);

  const apiTesting = () => {
    const API_KEY = "8R0EBEAR0948TTJ9WAFJ8S6MKHTE"; 

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
          energy: Number(energyInput), 
          energy_unit: "kWh",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLala(data); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEnergyChange = (event) => {
    setEnergyInput(event.target.value);
  };

  const handleCalculateClick = () => {
    apiTesting();
    setShowOutput(true); 
  };

  return (
    <div className="section">
      
      <div className="calculator-bg">

        <div className="p-6">
          <h1 className={`${styles.texts2} p-2 `}>Amount Of Energy Consumed(in 1month)</h1>
          <div className="flex relative">
          <input
            className="input-field p-6"
            type="number"
            value={energyInput}
            onChange={handleEnergyChange}
          />
          <h2 className="absolute right-2 p-4 mr-8 font-semibold">KWh</h2>
          </div>
          
         
        </div>

        <div className="p-6">
          <button className="calculate" onClick={handleCalculateClick}>
            <h3 className={`${styles.texts2} p-2 `}>Calculate</h3>
          </button>
        </div>

      </div>
      
      <div className="output mt-10">
        
        <div className="output-field flex relative ">
        <h2 className={`${styles.texts2} text-lg p-4`}>
        Your Carbon offset is :
        <p className="text-2xl">{showOutput && <>{lala && <p>{lala.co2e}</p>}</>}</p>
        
        </h2>
        <h3 className="absolute right-2 pt-10 mr-8 text-white text-2xl font-semibold">Kg</h3>
        </div>
      </div>

    </div>
  );
};

export default Electricity;
