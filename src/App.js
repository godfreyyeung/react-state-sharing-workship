import './App.css';
import { useState } from "react";
import { FormSection } from './FormSection';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <div className="App">
      IsSubmitting: {isSubmitting}
      <br />
      <button onClick={onSubmit}> Submit </button>
      <br />
      <FormSection
        isDisabled={isSubmitting}
      />
    </div>
  );
}

export default App;
