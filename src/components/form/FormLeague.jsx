import { useEffect, useState } from "react";
//API
import { post } from "../../api/Query";
import { URL } from "../../api/Control";

/* eslint-disable react/prop-types */
function FormLeague({ dataLeague, setDataLeague }) {
  const [sport, setSport] = useState({
    deporteId: "0",
    nombreDeporte: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setDataLeague(sport);
  }

  function handleInputChange(e) {
    e.preventDefault();
    setSport({ ...sport, [e.target.name]: e.target.value });
  }
  //child
  useEffect(() => {
    post(URL.create.league, dataLeague)
      .then((res) => console.log(res.json()))
      .then((data) => console.log(data));
    return () => {
      //limpiando setDataLeague();
    };
  }, [dataLeague]);  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">number league</label>
        <input type="text" name="deporteId" onChange={handleInputChange} value={sport.deporteId} />
        <label htmlFor="">which league?</label>
        <input type="text" name="nombreDeporte" onChange={handleInputChange} value={sport.nombreDeporte} />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
export { FormLeague };
