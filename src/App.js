import React from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [apiData, setApiData] = React.useState();
  console.log(apiData);

  return (
    <div className="App">
      <Form apiData={setApiData} />
    </div>
  );
}

export default App;
