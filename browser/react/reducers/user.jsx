const initialState = {
  allUser: [],
  selectedUser: {}
}

const userReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {

    case '':
      break

    default:
      return state
  }

  return newState
}

export default userReducer
