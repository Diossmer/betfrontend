import { useState } from "react";

/* eslint-disable react/prop-types */
function FormExercise({ onclick }) {
  const [sport, setSport] = useState({
    deporteId: "0",
    nombreDeporte: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onclick(sport);
  }

  function handleInputChange(e) {
    e.preventDefault();
    setSport({ ...sport, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">number sport</label>
        <input type="text" name="deporteId" onChange={handleInputChange} value={sport.deporteId} />
        <label htmlFor="">which sport?</label>
        <input type="text" name="nombreDeporte" onChange={handleInputChange} value={sport.nombreDeporte} />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
export { FormExercise };
