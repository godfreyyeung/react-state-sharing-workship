import './App.css';
import { useState, useContext, createContext } from "react";
import { FormSection } from './FormSection';
import { formReducer } from './formReducer';

export const formContext = createContext({
  isSubmitting: false,
  numFilled: 0
})

function App() {


  const [form, setForm] = useState({
    isSubmitting: false,
    numFilled: 0
  })

  const onSubmit = () => {
    // formDispatch({ type: 'toggleIsSubmitting' });

    // setTimeout(() => {
    //   formDispatch({ type: 'toggleIsSubmitting' });
    // }, 1000);
  }
 
  return (
    <div className="App">
      Form 1 
      <formContext.Provider value={{...form, setForm}}>
        Questions Filled out: {form.numFilled} / 3 
        <br />
        <button onClick={onSubmit}> Submit </button>
        <br />
        <FormSection />
      </formContext.Provider>
    </div>
  );
}
export default App;
