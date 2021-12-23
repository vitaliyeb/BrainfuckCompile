import React, {useState} from 'react';
import Editor from "./components/Editor";
import ControlPanel from "./components/ControlPanel";
import './i';

function App() {
    const [value, setValue] = useState('')

    return (
      <div className="App">
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
