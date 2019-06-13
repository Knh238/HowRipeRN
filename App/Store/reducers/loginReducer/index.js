import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT_SUCCESS,
  CREATE_PROFILE_ERROR,
  USER_INFO_FETCHED,
  USER_INFO_NOT_FOUND,
  USER_UPDATED,
  EDIT_USER_FAIL,
  CHECK_IF_NEW_USER,
  GOT_USER
} from '../../actions/login/index';

const initialState = {
  authenticated: false,
  userInfo: {},
  errorMsg: '',
  newUser: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true
      };
    case AUTH_FAIL:
      return {
        ...state,
        authenticated: false,
        errorMsg: action.errorMsg
      };
    case CHECK_IF_NEW_USER:
      return {
        ...state,
          newUser: action.bool
        };
    case CREATE_PROFILE_ERROR:
      return {
        ...state,
        errorMsg: action.errorMsg
      };
    case GOT_USER:
       return {
        ...state,
        userInfo: action.user
        };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        authenticated: false,
        userInfo: {}
      };
    case USER_INFO_FETCHED:
      return {
        ...state,
        userInfo: action.userProfile
      };
    case USER_INFO_NOT_FOUND:
      return {
        ...state,
        errorMsg: action.errorMsg
      };
    case USER_UPDATED:
      return {
        ...state,
        userInfo: action.userInfo
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        errorMsg: ''
      };
    default:
      return state;
  }
}
