import { takeLatest, put } from "redux-saga/effects"

const callEndpoint = async (variables) => {
  const link = 'http://localhost:4000/graphql';
  const method = 'POST';
  const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
  const query = `
    query Login($user: String!, $email: String!, $pass: String!) {
      createUser(user: $user, email: $email ,pass: $pass)
    }
  `
  const body = JSON.stringify({ query, variables })
  const response = await fetch(link, { method, headers, body });
  const data = await response.json();
  console.log("addUsers", data)
  return data;
}

function* obtainUsers({ payload }) {
  try {
    console.log("obtainUsers",payload)
    yield callEndpoint(payload);
    yield put({ type: 'START_OBTAIN_USERS' });
  } catch (error) {
    console.log("Error addUsers", error)
  }
}

export default function* addUsers() {
  yield takeLatest('START_CREATE_USERS', obtainUsers)
}