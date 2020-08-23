const defaultState = {
  isAuthenticated: false,
  message: '',
  id: null,
  token: null,
};

export function session(state = defaultState, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state, isAuthenticated: true
      };

    case 'SIGN_OUT':
      return { ...state, ...defaultState };

    case 'MESSAGE_LOGIN':
      return { ...state, message: action.payload };

    default:
      return state;
  }
}
