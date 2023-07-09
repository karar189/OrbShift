import React, { useState } from "react";

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
        }
        
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
      setLala(data); // Update the state with the response data
    })
    .catch((error) => {
      console.error(error);
      // Handle the error
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
      <div className="App">
        <h1>Flight Emission:</h1>

        <h3>From:</h3>
        <input type="text" value={fromInput} onChange={handleFromChange} />

        <h3>To:</h3>
        <input type="text" value={toInput} onChange={handleToChange} />

        <h3>Passenger Count:</h3>
        <input
          type="number"
          value={passengerCount}
          onChange={handlePassengerChange}
        />

        <h3>Ticket Class:</h3>
        <select value={ticketClass} onChange={handleTicketClassChange}>
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="firstclass">First Class</option>
        </select>

        <button onClick={handleCalculateClick}>Calculate</button>
        {lala && (
          <>
            <h2>CO2 Emission:</h2>
            <p>{lala.co2e}</p>
          </>
        )}
      </div>
    </>
  );
}

export default Flight