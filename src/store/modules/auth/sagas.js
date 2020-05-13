import {Alert} from 'react-native';
import {takeLatest, all, call, put} from 'redux-saga/effects';

import api from '~/services/api';
// import history from '~/services/history';
import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {username, password} = payload;

    const response = yield call(api.post, 'sessions', {
      username,
      password,
    });

    const {token, user} = response.data;

    yield put(signInSuccess(token, user));

    // history.push('Cadastro');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados',
    );
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {nome, username, password} = payload;

    yield call(api.post, 'cadastro', {
      nome,
      username,
      password,
    });

    // history.push('SignIn');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados',
    );

    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
