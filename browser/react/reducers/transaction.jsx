const initialState = {
  allTransaction: [],
  selectedTransaction: {}
}

const transactionReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {

    case '':
      break

    default:
      return state
  }

  return newState
}

export default transactionReducer
