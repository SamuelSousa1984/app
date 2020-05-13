import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  token: null,
  profile: null,
  index: null,
  ciclo: null,
  checkup: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@user/INDEX_ADD_SUCCESS': {
        draft.index = action.payload.index;
        break;
      }
      case '@user/INDEX_PROFILE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@user/CICLO_PROFILE_SUCCESS': {
        draft.ciclo = action.payload.ciclo;
        break;
      }
      case '@user/CICLO_PROFILE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@user/CHECK_UP_SUCCESS': {
        draft.checkup = action.payload.checkup;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.index = null;
        break;
      }
      default:
    }
  });
}
