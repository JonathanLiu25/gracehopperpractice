const initialState = {
  allInventory: [],
  selectedInventory: {}
}

const inventoryReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {

    case '':
      break

    default:
      return state
  }

  return newState
}

export default inventoryReducer
