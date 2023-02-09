import { useState } from "react";
import { NameInput } from './NameInput';
import { Conditions } from './Conditions';

export const FormSection = ({
  numFilled,
  setNumFilled
}) => {
  return (
    <div>
      <NameInput
        numFilled={numFilled}
        setNumFilled={setNumFilled}
      />
    </div>
  )
}