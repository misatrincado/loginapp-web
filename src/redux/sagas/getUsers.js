import { takeLatest, put } from "redux-saga/effects"

const callEndpoint = async () => {
  const link = 'http://localhost:4000/graphql';
  const method = 'POST';
  const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
  const query = `query {
    obtainUsers {
      id,
      user,
      email,
    }
  }`
  const body = JSON.stringify({ query })
  const response = await fetch(link, { method, headers, body });
  const data = await response.json();
  console.log("body",data)
  return data;
}

function* obtainUsers({ payload }) {
  try {
    const result = yield callEndpoint(payload);
    yield put({type: 'GET_USER_LIST',payload: result.data.obtainUsers});
  } catch (error) {
    console.log("Error obtainUsers", error)
  }
}

export default function* getUsers() {
  yield takeLatest('START_OBTAIN_USERS', obtainUsers)
}