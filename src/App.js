import './App.css';
import { useState } from "react";
import { FormSection } from './FormSection';
import { formReducer } from './formReducer';

const NameInput = ({numFilled, setNumFilled, isSubmitting, name, setName}) => {
  const [alreadyFilled, setAlreadyFilled] = useState(false);

  const updateFilled = () => {
    if(!alreadyFilled) {
      setAlreadyFilled(true);
      setNumFilled(numFilled + 1);
    }
  }

  return (
    <div>
      <input
        disabled={isSubmitting ? "disabled" : ""}
        onChange={(evt) => {
          setName(evt.target.value);
          updateFilled();
        }}
        value={name}
        key="editor1"
      />
   </div>
  )
}

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [numFilled, setNumFilled] = useState(0);
  const [name, setName] = useState("");


  const onSubmit = () => {

  }

  return (
    <div className="App">
      Form 1 
        Questions Filled out: {numFilled} / 3 
        <br />
        <button onClick={onSubmit}> Submit </button>
        <br />
        <FormSection
          NameInput={<NameInput numFilled={numFilled} setNumFilled={setNumFilled} isSubmitting={isSubmitting} name={name} setName={setName} />}
        />
    </div>
  );
}
export default App;
