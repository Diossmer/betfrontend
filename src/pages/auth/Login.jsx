import { useState } from "react";

export default function Navbars() {
  //hooks
  const [name, setName] = useState("APIUSER");
  //funcion
  const handleClick = () => {
    setName("USER");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
}
