import {
  AUTH_SUCCESS,
  LOGOUT_SUCCESS,
  CREATE_PROFILE_ERROR,
  USER_CREATED,
  USER_INFO_FETCHED,
  USER_INFO_NOT_FOUND,
  USER_UPDATED,
  LEAGUE_JOINED
} from '../../actions/login';

const initialState = {
  authenticated: false,
  userInfo: {},
  errorMsg: '',
  currentLeague: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true
      };
    case USER_CREATED:
      return {
        ...state,
        userInfo: action.userInfo
      };
    case CREATE_PROFILE_ERROR:
      return {
        ...state,
        errorMsg: action.errorMsg
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
        userInfo: action.userInfo
      };
    case USER_INFO_NOT_FOUND:
      return {
        ...state,
        errorMsg: action.errorMsg
      };
    case USER_UPDATED:
      return {
        ...state,
        userInfo: action.updatedUserInfo
      };
    case LEAGUE_JOINED:
      return {
        ...state,
        currentLeague: action.leagueID
      };
    default:
      return state;
  }
}
