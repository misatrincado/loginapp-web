import { takeLatest, put } from "redux-saga/effects"

const callEndpoint = async (variables) => {
  const link = 'http://localhost:4000/graphql';
  const method = 'POST';
  const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
  const query = `
  mutation UpdateUser($id: Int!, $user: String, $email: String) {
      updateUser(id: $id,user: $user, email: $email)
    }
  `
  const body = JSON.stringify({ query, variables })
  const response = await fetch(link, { method, headers, body });
  const data = await response.json();
  console.log("updateUser", data)
  return data;
}

function* obtainUsers({ payload }) {
  try {
    yield callEndpoint(payload);
    yield put({ type: 'START_OBTAIN_USERS' });
  } catch (error) {
    console.log("Error updateUser", error)
  }
}

export default function* updateUser() {
  yield takeLatest('START_UPDATE_USERS', obtainUsers)
}