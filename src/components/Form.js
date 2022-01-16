import React from "react";

export default function Form(props) {
  //------------------------------------------------------------------------------------------
  // Handle form
  //------------------------------------------------------------------------------------------

  const [cityName, setCityName] = React.useState({
    //set the inital name
    nameOfCity: "london",
  });

  const [isSubmit, setIsSubmit] = React.useState(true); // state needed to detect if the submit button is clicked

  function handleChange(event) {
    const { name, value } = event.target;
    //set the value to whats being typed in
    setCityName((prev) => {
      return {
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    //when submit clicked, state changes, this causes the componenet to re-render and then run the api
    event.preventDefault();
    setIsSubmit((prev) => {
      //have to return opposite boolean value as otherwise the dependancy in the useffect wont detect a difference
      return !prev;
    });
  }

  //------------------------------------------------------------------------------------------
  // Handle Api using hook
  //------------------------------------------------------------------------------------------

  React.useEffect(
    function () {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName.nameOfCity}&appid=708dbd9b677bb41f1461a55259144588`
      ).then((res) => {
        if (res.ok) {
          //check if name is there is an error with userinput
          return res.json().then((data) => props.apiData(data));
        } else if (res.status === 404) {
          alert("name is not recognised ");
        }
      });
    },

    [isSubmit] //run this hook when the submit button is clicked
  );
  //------------------------------------------------------------------------------------------
  // return JSX
  //------------------------------------------------------------------------------------------
  return (
    <form onSubmit={handleSubmit}>
      <label>Name of City</label>
      <input
        type="text"
        placeholder="City name"
        name="nameOfCity"
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
