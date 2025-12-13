import { useState } from "react";

const App = () => {
  const [text , setText] = useState("hello world");
  const changeText = () =>{
    setText("ps ps psp ");

  }

  return (
    <div>
      <button onClick={changeText}>click me</button><br/>
      <span id="text">{text}</span>
    </div>

  );
}

export default App;
