import { useState } from "react";

export const NameInput = ({
    isDisabled = false,
    numFilled,
    setNumFilled
  }) => {

  const [alreadyFilled, setAlreadyFilled] = useState(false);

  const updateFilled = () => {
    if(!alreadyFilled) {
      setAlreadyFilled(true);
      setNumFilled(numFilled + 1);
    }
  }

  return (
    <div>
      Enter Your Name:
      <input
       disabled={isDisabled ? "disabled" : ""}
       onChange={updateFilled}
      />
    </div>
  )
}