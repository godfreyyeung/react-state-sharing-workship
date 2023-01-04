import { useState } from "react";
import { NameInput } from './NameInput';
import { Conditions } from './Conditions';

export const FormSection = ({isDisabled = false}) => {
  return (
    <div>
      <NameInput isDisabled={isDisabled} />
      <Conditions isDisabled={isDisabled} />
    </div>
  )
}