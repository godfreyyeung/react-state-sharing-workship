import './App.css';
import { useReducer } from "react";
import { FormSection } from './FormSection';
import { formReducer } from './formReducer';

function App() {
  const [form, formDispatch] = useReducer(formReducer, {
    isSubmitting: false,
    numFilled: 0
  });

  return (
    <div className="App">
      Questions Filled out: {form.numFilled} / 3 
      <FormSection
        formDispatch={formDispatch}
        form={form}
      />
    </div>
  );
}

export default App;
