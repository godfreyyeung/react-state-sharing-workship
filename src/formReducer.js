export const formReducer = (state, action) => {
  switch (action.type) {
    case 'toggleIsSubmitting':
      return {
        ...state,
        isSubmitting: !state.isSubmitting,
      }
    case 'incrementFilled':
      return {
        ...state,
        numFilled: state.numFilled + 1,
      }
    default:
      throw new Error();
    }
}