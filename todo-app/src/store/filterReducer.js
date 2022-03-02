function filterReducer(state = 'All', action) {
  switch (action.type) {
    case "FILTER_COMPLETED":
      state = "Completed"
      return state;
    case "FILTER_ACTIVE":
      state = 'Active'
      return state;
    case 'FILTER_ALL':
      state = 'All'
      return state;
    default:
      return state;
  }
}

export default filterReducer;