import React, { useState } from "react";
import styles from "../styles";

function Flight() {
  const [lala, setLala] = useState(null);
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);
  const [ticketClass, setTicketClass] = useState("economy");

  const apiTesting = () => {
    const API_KEY = "8R0EBEAR0948TTJ9WAFJ8S6MKHTE";

    const requestData = {
      legs: [
        {
          from: fromInput,
          to: toInput,
          passengers: passengerCount,
          class: ticketClass,
        },
      ],
    };

    console.log(requestData);

    fetch("https://beta4.api.climatiq.io/travel/flights", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
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

  const handleFromChange = (event) => {
    setFromInput(event.target.value);
  };

  const handleToChange = (event) => {
    setToInput(event.target.value);
  };

  const handlePassengerChange = (event) => {
    setPassengerCount(event.target.value);
  };

  const handleTicketClassChange = (event) => {
    setTicketClass(event.target.value);
  };

  const handleCalculateClick = () => {
    apiTesting();
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="calculator-bg3">
          <div className="p-6">
            <h1 className={`${styles.texts2} p-2 flex `}>From select your <span><a href="https://www.iata.org/en/publications/directories/code-search/" className="text-md text-blue-300"> IETA </a></span> code </h1>
            <input
              className="input-field p-6"
              type="text"
              value={fromInput}
              onChange={handleFromChange}
            />
          </div>

          <div className="p-6">
          <h1 className={`${styles.texts2} p-2 flex `}>To select your <span><a href="https://www.iata.org/en/publications/directories/code-search/" className="text-md text-blue-300"> IETA </a></span> code </h1>
            <input
              className="input-field p-6"
              type="text"
              value={toInput}
              onChange={handleToChange}
            />
          </div>

          <div className="p-6">
            <h1 className={`${styles.texts2} p-2 `}>No. of Passengers</h1>
            <input
              className="input-field p-6"
              type="number"
              value={passengerCount}
              onChange={handlePassengerChange}
            />
          </div>

          <div className="p-6">
            <h1 className={`${styles.texts2} p-2 `}>Ticket Class</h1>
            <select
              className="input-field p-6"
              value={ticketClass}
              onChange={handleTicketClassChange}>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="firstclass">First Class</option>
            </select>
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
}

export default Flight;
