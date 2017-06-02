const commentReducer = (state=[], action) => {
  console.log('commentReducer', action);
  switch (action.type) {
    case 'LOAD_COMMENTS':
      return action.comments
      break;
    default:
      return state
  }
}

export default commentReducer
