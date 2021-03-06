import {
  ALL_LEAGUES_FETCHED,
  CURR_LEAGUE_FETCHED,
  LEAGUE_NOT_FOUND,
  LEAGUE_CREATED,
  JOINED_LEAGUE,
  LEAGUE_UPDATED,
  LEAGUE_START_DATE_UPDATED,
  LEFT_LEAGUE,
  LEAGUE_SCORES_UPDATED,
  LEAGUE_SCORES_FETCHED,
  SET_LEAGUE_WEEK_INFO,
  UPDATE_LEAGUE_WEEK_INFO
} from '../../actions/leagues';

const initialState = {
  allLeagues: [],
  currentLeague: {},
  currentLeagueName: '',
  players: [],
  leagueStartDate: '',
  errorMsg: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ALL_LEAGUES_FETCHED:
      return {
        ...state,
        allLeagues: action.leagueList
      };
    case CURR_LEAGUE_FETCHED:
      return {
        ...state,
        currentLeagueName: action.currLeagueName,
        players: action.players,
        startDate: action.startDate
      };
    case LEAGUE_CREATED:
      return {
        ...state,
        allLeagues: [...action.newLeagueData],
        currentLeague: action.leagueInfo,
        currentLeagueName: action.leagueInfo.name,
        players: action.leagueInfo.players,
        startDate: action.leagueInfo.startDate,
        errorMsg: action.errorMsg
      };
    case JOINED_LEAGUE:
      return {
        ...state,
        authenticated: false,
        userInfo: {}
      };
    case LEAGUE_START_DATE_UPDATED:
      return {
        ...state,
        leagueStartDate: action.startDate
      };

    case LEFT_LEAGUE:
      return {
        ...state,
        userInfo: action.userProfile
      };
    case LEAGUE_NOT_FOUND:
      return {
        ...state,
        errorMsg: action.errorMsg
      };
    case LEAGUE_SCORES_UPDATED:
      return {
        ...state,
        errorMsg: action.errorMsg
      };
    case LEAGUE_SCORES_FETCHED:
      return {
        ...state,
        userInfo: action.userInfo
      };
    case SET_LEAGUE_WEEK_INFO:
      return {
        ...state,
        errorMsg: ''
      };
    case UPDATE_LEAGUE_WEEK_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      };
    default:
      return state;
  }
}
