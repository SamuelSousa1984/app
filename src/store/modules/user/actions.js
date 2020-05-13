export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: {data},
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: {profile},
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function indexAddRequest(sexo, altura, peso, imc) {
  return {
    type: '@user/INDEX_ADD_REQUEST',
    payload: {sexo, altura, peso, imc},
  };
}

export function indexAddSuccess(index) {
  return {
    type: '@user/INDEX_ADD_SUCCESS',
    payload: {index},
  };
}

export function indexProfileFailure() {
  return {
    type: '@user/INDEX_PROFILE_FAILURE',
  };
}

export function cicloProfileRequest(dia, mes, ano) {
  return {
    type: '@user/CICLO_PROFILE_REQUEST',
    payload: {dia, mes, ano},
  };
}

export function cicloProfileSuccess(ciclo) {
  return {
    type: '@user/CICLO_PROFILE_SUCCESS',
    payload: {ciclo},
  };
}

export function cicloProfileFailure() {
  return {
    type: '@user/CICLO_PROFILE_FAILURE',
  };
}

export function checkUpRequest(fc, ps, pd) {
  return {
    type: '@user/CHECK_UP_REQUEST',
    payload: {fc, ps, pd},
  };
}

export function checkUpSuccess(checkup) {
  return {
    type: '@user/CHECK_UP_SUCCESS',
    payload: {checkup},
  };
}

export function checkUpFailure() {
  return {type: '@user/CHECK_UP_FAILURE'};
}
