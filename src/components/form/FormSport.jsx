import { useEffect, useState } from "react";
//API
import { post } from "../../api/Query";
import { URL } from "../../api/Control";

/* eslint-disable react/prop-types */
function FormSport({ dataSport, setDataSport }) {
  const [sport, setSport] = useState({
    deporteId: "0",
    nombreDeporte: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setDataSport(sport);
  }

  function handleInputChange(e) {
    e.preventDefault();
    setSport({ ...sport, [e.target.name]: e.target.value });
  }
  //child
  useEffect(() => {
    post(URL.create.sport, dataSport)
      .then((res) => console.log(res.json()))
      .then((data) => console.log(data));
    return () => {
      //limpiando setDataValue();
    };
  }, [dataSport]);
  
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
export { FormSport };
