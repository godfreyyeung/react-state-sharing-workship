import { useState } from "react";
import { NameInput } from './NameInput';
import { Conditions } from './Conditions';

export const FormSection = ({
  form,
  formDispatch
}) => {
  return (
    <div>
      <NameInput />
    </div>
  )
}