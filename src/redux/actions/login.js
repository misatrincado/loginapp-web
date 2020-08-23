export function signOut(payload) {
  return {
    payload,
    type: 'SIGN_OUT',
  };
}

export const startGetLogin = payload => ({
  type: 'START_GET_LOGIN',
  ...payload
})

export const startObtainUsers = payload => ({
  type: 'START_OBTAIN_USERS',
  ...payload
})

export const startCreateUsers = payload => ({
  type: 'START_CREATE_USERS',
  ...payload
})

export const startUpdateUsers = payload => ({
  type: 'START_UPDATE_USERS',
  ...payload
})