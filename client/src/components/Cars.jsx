import React, { useState } from "react";
import styles from "../styles";

const Cars = () => {
  const [lala, setLala] = useState(null);
  const [weightInput, setWeightInput] = useState("");
  const [distanceInput, setDistanceInput] = useState("");

  const apiTesting = () => {
    const API_KEY = "8R0EBEAR0948TTJ9WAFJ8S6MKHTE"; 

    fetch("https://beta4.api.climatiq.io/estimate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        emission_factor: {
          activity_id:
            "freight_vehicle-vehicle_type_truck_medium_or_heavy-fuel_source_na-vehicle_weight_na-percentage_load_na",
          data_version: "^1",
        },
        parameters: {
          weight: Number(weightInput),
          distance: Number(distanceInput),
          weight_unit: "kg",
          distance_unit: "km",
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

  const handleWeightChange = (event) => {
    setWeightInput(event.target.value); 
  };

  const handleDistanceChange = (event) => {
    setDistanceInput(event.target.value); 
  };

  const handleCalculateClick = () => {
    apiTesting();
  };

  return (
    <>
      <div className="section">

        <div className="calculator-bg2">
          <div className="p-6">
            <h1 className={`${styles.texts2} p-2 `}>Weight of Cargo</h1>
            <div className="flex relative" >
            <input
              className="input-field p-6"
              type="number"
              value={weightInput}
              onChange={handleWeightChange}
            />
            <h2 className="absolute right-2 p-4 mr-8 font-semibold mr-8">Kg</h2>
            </div>
            
          </div>

          <div className="p-6">
            <h1 className={`${styles.texts2} p-2 `}>Distance Covered</h1>
            <div  className="flex relative">
            <input
              className="input-field p-6"
              type="number"
              value={distanceInput}
              onChange={handleDistanceChange}
            />
            <h2 className="absolute right-2 p-4 mr-8 font-semibold  mr-8">Km</h2>
            </div>
            
          </div>

          <div className="p-6 mt-5">
            <button className="calculate" onClick={handleCalculateClick}>
              <h3 className={`${styles.texts2} p-2 `}>Calculate</h3>
            </button>
          </div>
        </div>
        

        <div className="output mt-10">
          <div className="output-field flex relative ">
            <h2 className={`${styles.texts2} text-lg p-6`}>
              Your Carbon offset is:
              <p className="text-2xl">{lala && <p>{lala.co2e}</p>}</p>
            </h2>

            <h3 className="absolute right-2 pt-10 mr-8 text-white text-2xl font-semibold">Kg</h3>
        
          </div>
        </div>


      </div>
    </>
  );
};

export default Cars;
