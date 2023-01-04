import { useState, useContext } from "react";
import { formContext } from "./App";

export const NameInput = () => {
  const { numFilled, isSubmitting, setForm } = useContext(formContext);

  const [alreadyFilled, setAlreadyFilled] = useState(false);

  const updateFilled = () => {

    if(!alreadyFilled) {
      setAlreadyFilled(true);
      setForm({ numFilled: numFilled + 1, isSubmitting})
    }
  }

  return (
    <div>
      Question 1/3 <br />
      Enter Your Name:
      <input
      disabled={isSubmitting ? "disabled" : ""}
      onChange={updateFilled}
      />
    </div>
  )
}