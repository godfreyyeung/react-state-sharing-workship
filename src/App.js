import './App.css';
import { useState, useReducer } from "react";
import { FormSection } from './FormSection';
import { formReducer } from './formReducer';

function App() {
  const [form, formDispatch] = useReducer(formReducer, {
    isSubmitting: false,
    numFilled: 0
  });

  const onSubmit = () => {
    formDispatch({ type: 'toggleIsSubmitting' });

    setTimeout(() => {
      formDispatch({ type: 'toggleIsSubmitting' });
    }, 1000);
  }

  return (
    <div className="App">
      Questions Filled out: {form.numFilled} / 3 
      <br />
      <button onClick={onSubmit}> Submit </button>
      <br />
      <FormSection
        formDispatch={formDispatch}
        form={form}
      />
    </div>
  );
}

// isDisabled={isSubmitting}
// numFilled={numFilled}
// setNumFilled={setNumFilled}

export default App;
