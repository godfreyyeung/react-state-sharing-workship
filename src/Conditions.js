export const Conditions = ({ isDisabled = false }) => {
  return (
    <div>
      Check box to accept condition 1 
      <input disabled={isDisabled ? "disabled" : ""} type="checkbox" />
    </div>
  )
}