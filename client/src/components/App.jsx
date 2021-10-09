import React, { useState, useEffect } from "react";
import { Button, Input } from "@material-ui/core";

const App = () => {
  const [nameInput, setNameInput] = useState("");
  const getFields = (e) => {
    setNameInput(e.target.value);
  };

  const submitName = () => {
    console.log(nameInput);
  };

  return (
    <div>
      <Input type="text" onChange={getFields}></Input>
      <Button variant="contained" color="primary" onClick={submitName}>
        Hey
      </Button>
    </div>
  );
};

export default App;
