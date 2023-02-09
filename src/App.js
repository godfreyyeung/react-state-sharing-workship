import './App.css';
import { useState } from "react";
import { FormSection } from './FormSection';

function App() {
  const [numFilled, setNumFilled] = useState(0);

  return (
    <div className="App">
      Questions Filled out: {numFilled} / 3 
      <FormSection
        numFilled={numFilled}
        setNumFilled={setNumFilled}
      />
    </div>
  );
}

export default App;
