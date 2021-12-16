import React, {useState} from 'react';
import Editor from "./components/Editor";


function App() {
    const [value, setValue] = useState('')

    return (
      <div className="App">
          <Editor
              value={value}
              setValue={setValue}
          />
      </div>
    );
}

export default App;
