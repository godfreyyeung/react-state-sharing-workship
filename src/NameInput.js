import { useState } from "react";

export const NameInput = ({
   form,
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
      Question 1/3 <br />
      Enter Your Name:
      <input
       disabled={form.isSubmitting ? "disabled" : ""}
       onChange={updateFilled}
      />
    </div>
  )
}