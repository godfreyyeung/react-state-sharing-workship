export const Conditions = ({ isDisabled = false }) => {
  return (
    <div>
      Check box to accept condition 1 
      <input disabled={isDisabled ? "disabled" : ""} type="checkbox" />
      <br />
      Check box to accept condition 2
      <input disabled={isDisabled ? "disabled" : ""} type="checkbox" />
    </div>
  )
}