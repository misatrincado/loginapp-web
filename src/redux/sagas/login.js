import { takeLatest, put } from "redux-saga/effects"

const loginCall = async (variables) => {
  const link = 'http://localhost:4000/graphql';
  const method = 'POST';
  const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
  const query = `
  query Login($user: String!, $pass: String!) { 
    login(user: $user, pass: $pass) {
      message,
      status
    }
  }`
  const body = JSON.stringify({ query, variables })
  const response = await fetch(link, { method, headers, body });
  const data = await response.json();
  console.log("body",data)
  return data;
}

function* getlogin({ payload }) {
  try {
    const result = yield loginCall(payload);
    yield put({type: 'MESSAGE_LOGIN',payload: result.data.login.message});
    if(result.data.login.status) {
      yield put({type: 'SIGN_IN'});
    }
  } catch (error) {
    console.log("Error getlogin", error)
  }
}

export default function* login() {
  yield takeLatest('START_GET_LOGIN', getlogin)
}