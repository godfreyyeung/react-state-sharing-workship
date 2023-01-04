export const NameInput = ({ isDisabled = false }) => {
  return (
    <div>
      Enter Your Name:
      <input disabled={isDisabled ? "disabled" : ""}/>
    </div>
  )
}