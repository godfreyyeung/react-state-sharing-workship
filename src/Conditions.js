export const Conditions = ({ form, formDispatch}) => {
  return (
    <div>
      Check box to accept condition 1 
      <input disabled={form.isSubmitting ? "disabled" : ""} type="checkbox" />
      <br />
      Check box to accept condition 2
      <input disabled={form.isSubmitting ? "disabled" : ""} type="checkbox" />
    </div>
  )
}