function filterReducer(state = 'All', action) {
  switch (action.type) {
    case "FILTER_COMPLETED":
      return "Completed";
    case "FILTER_ACTIVE":
      return 'Active';
    default:
    return 'All';
  }
}

export default filterReducer;