let sport = {
  deporteId: 0,
  nombreDeporte: "",
};

function FormExercise({ onclick }) {
  function handleClick(e) {
    e.preventDefault();
    console.log(e);
    onclick(sport);
  }

  return (
    <>
      <form onClick={handleClick}>
        <label htmlFor="">number sport</label>
        <input type="text" name={sport.deporteId} />
        <label htmlFor="">which sport?</label>
        <input type="text" name={sport.nombreDeporte} />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
export { FormExercise };
