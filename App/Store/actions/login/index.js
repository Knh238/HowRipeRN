import moment from 'moment';

import firebase from '../../../../firebase';
import db from '../../../../db';
import { fetchCurrLeague } from '../leagues';
import {
  ALL_LEAGUES_FETCHED,
  CURR_LEAGUE_FETCHED,
  LEAGUE_CREATED,
  LEAGUE_JOINED,
  LEFT_LEAGUE,
  LEAGUE_SCORES_UPDATED,
  LEAGUE_SCORES_FETCHED,
  SET_LEAGUE_WEEK_INFO,
  UPDATE_LEAGUE_WEEK_INFO
} from '../leagues';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const USER_CREATED = 'USER_CREATED';
export const USER_INFO_FETCHED = 'USER_INFO_FETCHED';
export const USER_INFO_NOT_FOUND = 'USER_INFO_NOT_FOUND';
export const USER_UPDATED = 'USER_UPDATED';

export const userInfoFetched = userInfo => {
  return {
    type: USER_INFO_FETCHED,
    userInfo
  };
};

export const userInfoNotFound = errorMsg => {
  return {
    type: USER_INFO_NOT_FOUND,
    errorMsg
  };
};

export const createProfileError = errorMsg => {
  return {
    type: CREATE_PROFILE_ERROR,
    errorMsg
  };
};

export const authSuccess = () => {
  return {
    type: AUTH_SUCCESS
  };
};

export const userCreated = userInfo => {
  return {
    type: USER_CREATED,
    userInfo
  };
};

export const logOutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const userUpdated = updatedUserInfo => {
  return {
    type: USER_UPDATED,
    userInfo: updatedUserInfo
  };
};

export const editUserFail = errorMsg => {
  return {
    type: EDIT_USER_FAIL,
    errorMsg
  };
};

export const inviteError = () => {
  return {
    type: INVITE_ERROR
  };
};

export function doesUserExist(user) {
  const userRef = db.collection('users').doc(user.uid);
  return userRef.get().then(function(dbUser) {
    if (dbUser.exists) {
      return true;
    } else {
      return false;
    }
  });
}

export function logUserIn() {
  return async dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        const userRef = db.collection('users').doc(user.uid);
        userRef.get().then(function(dbUser) {
          if (dbUser.exists) {
            const userData = dbUser.data();
            dispatch(userInfoFetched(dbUser.data()));
            //console.log('this is user data object', userData);
            if (userData.currentLeague) {
              dispatch(fetchCurrLeague(userData.currentLeague));
            }
            dispatch(authSuccess());
          } else {
            dispatch(authReady());
          }
        });
      }
    });
  };
}
// export function fetchCurrLeague(leagueID) {
//   return async dispatch => {
//     console.log('this has been called with this id-------', leagueID);
//     var docRef = db.collection('leagues').doc(`${leagueID}`);
//     // console.log('this has been called with this id-------', leagueID);
//     docRef
//       .get()
//       .then(function(doc) {
//         if (doc.exists) {
//           const currLeague = doc.data();
//           dispatch(currLeaguefetched(currLeague));
//         } else {
//           const msg = 'No such user with that uid';
//           dispatch(userInfoNotFound(msg));
//         }
//       })
//       .catch(function(error) {
//         const msg2 = 'Error Retrieving User Document';
//         dispatch(profileNotFound(msg2));
//       });
//   };
// }
export function createUser(userInfo) {
  return async dispatch => {
    const self = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        const currTime = Date.now();
        const currentTime = moment(currTime).format('MMMM Do YYYY, h:mm:ss a');
        const newUser = {
          uid: user.uid,
          email: userInfo.email,
          icon: 'red',
          lastLoginAt: currentTime,
          userName: '',
          displayName: '',
          firstName: userInfo.firstName,
          lastName: userInfo.lastName
        };
        db.collection('users')
          .doc(user.uid)
          .set(newUser)
          .then(function(docRef) {
            dispatch(userCreated(newUser));
            self.props.navigation.navigate('Home');
          })
          .catch(function(error) {
            self.setState({ errorMessage: error.message });
          });
      }
    });
  };

  //   dispatch(userUpdated(newUser));
  //   dispatch(authSuccess());
  // })
  // .catch(function(error) {
  //   console.error('Error adding document: ', error);
  //   dispatch(createProfileError(error));
  // });
}
// }

export function userLogout() {
  return async dispatch => {
    try {
      await firebase.auth().signOut();
      dispatch(logOutSuccess());
    } catch (e) {
      console.log('Error: ', e);
    }
  };
}

export const fetchUserInfo = userID => {
  return async dispatch => {
    var docRef = db.collection('users').doc(`${userID}`);

    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          const profile = doc.data();
          dispatch(userInfoFetched(profile));
        } else {
          const msg = 'No such user with that uid';
          dispatch(userInfoNotFound(msg));
        }
      })
      .catch(function(error) {
        const msg2 = 'Error Retrieving User Document';
        dispatch(profileNotFound(msg2));
      });
  };
};

export const addNetwork = (networkObj, currentUser) => {
  return async dispatch => {
    const userRef = db.collection('users').doc(currentUser.uid);
    return db
      .runTransaction(transaction => {
        return transaction.get(userRef).then(function(user) {
          if (!user.exists) {
            throw 'Document does not exist!';
          }
          const networksUpdate = user.data().socialNetworks;
          networksUpdate.push(networkObj);
          transaction.update(userRef, { socialNetworks: networksUpdate });
          return user.data().uid;
        });
      })
      .then(function(uid) {
        console.log('Document successfully updated');
        dispatch(updateUser(uid));
      })
      .catch(function(error) {
        console.error('Error updating document: ', error);
      });
  };
};

const updateUser = uid => {
  return async dispatch => {
    const userRef = db.collection('users').doc(uid);
    userRef
      .get()
      .then(function(user) {
        if (user.exists) {
          const profile = user.data();
          dispatch(userUpdated(profile));
        } else {
          const msg = 'No such user with that uid';
          dispatch(profileNotFound(msg));
        }
      })
      .catch(function(error) {
        const msg = 'Error Retrieving User Document';
        dispatch(profileNotFound(msg));
      });
  };
};
