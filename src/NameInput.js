import { useState } from "react";

export const NameInput = ({
   formDispatch
  }) => {

  const [alreadyFilled, setAlreadyFilled] = useState(false);

  const updateFilled = () => {
    if(!alreadyFilled) {
      setAlreadyFilled(true);
      formDispatch({ type: 'incrementFilled' });
    }
  }

  return (
    <div>
      Enter Your Name:
      <input
       onChange={updateFilled}
      />
    </div>
  )
}