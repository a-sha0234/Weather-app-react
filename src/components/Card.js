import React from "react";

export default function Card(props) {
  console.log(props);

  return (
    <div className="App">
      <h1>{props.data.name}</h1>
    </div>
  );
}
