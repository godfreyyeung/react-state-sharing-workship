import { useState } from "react";
import { NameInput } from './NameInput';
import { Conditions } from './Conditions';

export const FormSection = ({
  isDisabled = false,
  numFilled,
  setNumFilled
}) => {
  return (
    <div>
      <NameInput
        isDisabled={isDisabled}
        numFilled={numFilled}
        setNumFilled={setNumFilled}
      />
      <Conditions
        isDisabled={isDisabled}
        numFilled={numFilled}
        setNumFilled={setNumFilled}
      />
    </div>
  )
}