import React, {useState} from 'react';
import Editor from "./components/Editor";
import ControlPanel from "./components/ControlPanel";

function App() {
    const [value, setValue] = useState('')

    return (
      <div className="App">
          <Editor
              value={value}
              setValue={setValue}
          />
          <ControlPanel

          />
      </div>
    );
}

export default App;