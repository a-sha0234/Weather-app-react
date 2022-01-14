import React from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  //------------------------------------------------------------------------------------------
  // save api data, check if its empty
  //------------------------------------------------------------------------------------------
  const [apiData, setApiData] = React.useState({});

  function isApiDataEmpty(data) {
    //function to check if api data is empty
    return Object.keys(apiData).length > 0 ? true : false;
  }

  //------------------------------------------------------------------------------------------
  // Return Jsx
  //------------------------------------------------------------------------------------------
  return (
    <div className="App">
      <Form apiData={setApiData} />
      {isApiDataEmpty(apiData) && <Card data={apiData} />}
    </div>
  );
}

export default App;
