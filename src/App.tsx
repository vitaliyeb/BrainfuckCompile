import React, {useState} from 'react';
import Editor from "./components/Editor";
import ControlPanel from "./components/ControlPanel";
import Question from "./components/Question/Question";

function App() {
    const [value, setValue] = useState('')

    return (
      <div className="App">
          <Question />
          <Editor
              value={value}
              setValue={setValue}
          />
          <ControlPanel
              code={value}
          />
      </div>
    );
}

export default App;
