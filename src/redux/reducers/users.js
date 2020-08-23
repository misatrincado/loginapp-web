const defaultState = {
  userList: [],
};

export function users(state = defaultState, action) {
  switch (action.type) {
    case 'GET_USER_LIST':
      return { ...state, userList: action.payload };

    default:
      return state;
  }
}
