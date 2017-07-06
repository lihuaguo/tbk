const initialState = {
  loading: false
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {...state, loading: true}
    default:
      return state
  }
}


export default login
