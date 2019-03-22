
export default (state = [], action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return [...state, action.payload]
    default:
      return state
  }
};
