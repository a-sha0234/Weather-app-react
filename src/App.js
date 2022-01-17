import React from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import "./Scss/style.scss";

function App() {
  //------------------------------------------------------------------------------------------
  // save api data, check if its empty
  //------------------------------------------------------------------------------------------
  const [apiData, setApiData] = React.useState({});

  function isApiDataEmpty(data) {
    //function to check if apidata is empty
    return Object.keys(apiData).length > 0 ? true : false;
  }

  //------------------------------------------------------------------------------------------
  // Return Jsx
  //------------------------------------------------------------------------------------------
  return (
    <div className="App">
      <header className="form-top">
        <Form apiData={setApiData} />
      </header>
      {/* only render card component if api had sent data  */}

      <main className="card">
        {isApiDataEmpty(apiData) && <Card data={apiData} />}
      </main>
    </div>
  );
}

export default App;
