import React from "react";

export default function Form() {
  //------------------------------------------------------------------------------------------
  // Handle form
  //------------------------------------------------------------------------------------------
  const [cityName, setCityName] = React.useState({
    nameOfCity: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCityName((prev) => {
      return {
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name of currency</label>
      <input
        type="text"
        placeholder="City name"
        name=" nameOfCity"
        // this is a controlled component as the value is coming from the state
        //Also had to use defaultValue which is only for the inital render: https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro
        //had to do this as I was having a problem with my controlled component changing to an uncontrolled component
        defaultValue={cityName.nameOfCity}
        onChange={handleChange}
      ></input>
      <button>Search</button>
    </form>
  );
}
