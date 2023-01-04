import './App.css';
import { useState } from "react";
import { FormSection } from './FormSection';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [numFilled, setNumFilled] = useState(0);

  const onSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <div className="App">
      Questions Filled out: {numFilled} / 3 
      <br />
      <button onClick={onSubmit}> Submit </button>
      <br />
      <FormSection
        isDisabled={isSubmitting}
        numFilled={numFilled}
        setNumFilled={setNumFilled}
      />
    </div>
  );
}

export default App;
