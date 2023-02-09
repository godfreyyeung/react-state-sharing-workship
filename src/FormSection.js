import { NameInput } from './NameInput';

export const FormSection = ({
  form,
  formDispatch
}) => {
  return (
    <div>
      <NameInput
        formDispatch={formDispatch}
        form={form}
      />
    </div>
  )
}