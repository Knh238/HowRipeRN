import {
  FILM_ADDED,
  FILM_DETAILS_UPDATED,
  FILM_CHATTER_FETCHED,
  FILM_SCORES_FETCHED,
  FILM_RT_SCORE_UPDATED,
  USER_SCORED_FILM,
  USER_BLOGGED_FILM,
  FILM_SCORES_LOCKED
} from 'actions/films/index';

const initialState = {
  authenticated: false,
  userInfo: {},
  errorMsg: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FILM_ADDED:
      return {
        ...state,
        authenticated: true
      };
    case FILM_DETAILS_UPDATED:
      return {
        ...state,
        authenticated: false,
        errorMsg: action.errorMsg
      };
    case FILM_CHATTER_FETCHED:
      return {
        ...state,
        errorMsg: action.errorMsg
      };
    case FILM_SCORES_FETCHED:
      return {
        ...state,
        authenticated: false,
        userInfo: {}
      };
    case FILM_RT_SCORE_UPDATED:
      return {
        ...state,
        userInfo: action.userProfile
      };
    case USER_SCORED_FILM:
      return {
        ...state,
        errorMsg: action.errorMsg
      };
    case USER_BLOGGED_FILM:
      return {
        ...state,
        userInfo: action.userInfo
      };
    case FILM_SCORES_LOCKED:
      return {
        ...state,
        errorMsg: ''
      };
    default:
      return state;
  }
}
