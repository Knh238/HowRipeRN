import moment from 'moment';
import firebase from '../../../../firebase';
import db from '../../../../db';

export const ALL_LEAGUES_FETCHED = 'ALL_LEAGUES_FETCHED';
export const CURR_LEAGUE_FETCHED = 'CURR_LEAGUE_FETCHED';
export const LEAGUE_NOT_FOUND = 'LEAGUE_NOT_FOUND';

export const LEAGUE_CREATED = 'LEAGUE_CREATED';
export const LEAGUE_JOINED = 'LEAGUE_JOINED';
export const LEFT_LEAGUE = 'LEFT_LEAGUE';
export const LEAGUE_SCORES_UPDATED = 'LEAGUE_SCORES_UPDATED';
export const LEAGUE_SCORES_FETCHED = 'LEAGUE_SCORES_FETCHED';
export const SET_LEAGUE_WEEK_INFO = 'SET_LEAGUE_WEEK_INFO';
export const UPDATE_LEAGUE_WEEK_INFO = 'UPDATE_LEAGUE_WEEK_INFO';

// export const userInfoFetched = userProfile => {
//   return {
//     type: USER_INFO_FETCHED,
//     userProfile
//   };
// };

export const currLeaguefetched = currLeague => {
  return {
    type: CURR_LEAGUE_FETCHED,
    currLeague
  };
};

export const leagueNotFound = errorMsg => {
  return {
    type: LEAGUE_NOT_FOUND,
    errorMsg
  };
};

// export const createProfileError = errorMsg => {
//   return {
//     type: CREATE_PROFILE_ERROR,
//     errorMsg
//   };
// };

// export const authSuccess = () => {
//   return {
//     type: AUTH_SUCCESS
//   };
// };

// export const logOutSuccess = () => {
//   return {
//     type: LOGOUT_SUCCESS
//   };
// };

// export const userUpdated = updatedUserInfo => {
//   return {
//     type: USER_UPDATED,
//     userInfo: updatedUserInfo
//   };
// };

// export const editUserFail = errorMsg => {
//   return {
//     type: EDIT_USER_FAIL,
//     errorMsg
//   };
// };

// export const inviteError = () => {
//   return {
//     type: INVITE_ERROR
//   };
// };

// export function doesUserExist(user) {
//   const userRef = db.collection('users').doc(user.uid);
//   return userRef.get().then(function(dbUser) {
//     if (dbUser.exists) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

// export function logUserIn(user) {
//   return async dispatch => {
//     const userRef = db.collection('users').doc(user.uid);
//     userRef.get().then(function(dbUser) {
//       if (dbUser.exists) {
//         dispatch(userUpdated(dbUser.data()));
//         dispatch(authSuccess());
//       } else {
//         dispatch(authReady());
//       }
//     });
//   };
// }

// export function createUser(user) {
//   return async dispatch => {
//     const currTime = Date.now();
//     const currentTime = moment(currTime).format('MMMM Do YYYY, h:mm:ss a');
//     const newUser = {
//       uid: user.uid,
//       email: user.email,
//       photoURL: 'red',
//       lastLoginAt: currentTime
//     };
//     db.collection('users')
//       .doc(user.uid)
//       .set(newUser)
//       .then(function() {
//         dispatch(userUpdated(newUser));
//         dispatch(authSuccess());
//       })
//       .catch(function(error) {
//         console.error('Error adding document: ', error);
//         dispatch(createProfileError(error));
//       });
//   };
// }

// export function userLogout() {
//   return async dispatch => {
//     try {
//       await firebase.auth().signOut();
//       dispatch(logOutSuccess());
//     } catch (e) {
//       console.log('Error: ', e);
//     }
//   };
// }

// export const fetchCurrLeague = leagueID => {

export function fetchCurrLeague(leagueID) {
  return async dispatch => {
    console.log('this has been called with this id-------', leagueID);
    var docRef = db.collection('leagues').doc(`${leagueID}`);
    // console.log('this has been called with this id-------', leagueID);
    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          const currLeague = doc.data();
          console.log(
            'curent league data in featch currently league',
            currLeague
          );
          dispatch(currLeaguefetched(currLeague));
        } else {
          const msg = 'No such user with that uid';
          dispatch(leagueNotFound(msg));
        }
      })
      .catch(function(error) {
        const msg2 = 'Error Retrieving User Document';
        dispatch(leagueNotFound(msg2));
      });
  };
}

// export const followUser = (userObj, currUserInfo) => {
//   return async dispatch => {
//     const user = firebase.auth().currentUser;
//     const currUserRef = db.collection('users').doc(user.uid);
//     const currUserInfoUpdated = currUserInfo;
//     const currFollowing = [...currUserInfo.following, userObj];

//     currUserInfoUpdated.following = currFollowing;

//     currUserRef
//       .update({
//         following: firebase.firestore.FieldValue.arrayUnion(userObj)
//       })
//       .then(function() {
//         dispatch(userUpdated(currUserInfoUpdated));
//       });
//   };
// };

// export const unfollowUser = (userObj, currUserInfo) => {
//   return async dispatch => {
//     const user = firebase.auth().currentUser;
//     const currUserInfoUpdated = currUserInfo;
//     const currFollowing = currUserInfo.following.filter(item => {
//       if (item.uid !== userObj.uid) {
//         return item;
//       }
//     });
//     currUserInfoUpdated.following = currFollowing;
//     const currUserRef = db.collection('users').doc(user.uid);
//     currUserRef
//       .update({
//         following: firebase.firestore.FieldValue.arrayRemove(userObj)
//       })
//       .then(function() {
//         dispatch(userUpdated(currUserInfoUpdated));
//       });
//   };
// };

// export const addNetwork = (networkObj, currentUser) => {
//   return async dispatch => {
//     const userRef = db.collection('users').doc(currentUser.uid);
//     return db
//       .runTransaction(transaction => {
//         return transaction.get(userRef).then(function(user) {
//           if (!user.exists) {
//             throw 'Document does not exist!';
//           }
//           const networksUpdate = user.data().socialNetworks;
//           networksUpdate.push(networkObj);
//           transaction.update(userRef, { socialNetworks: networksUpdate });
//           return user.data().uid;
//         });
//       })
//       .then(function(uid) {
//         console.log('Document successfully updated');
//         dispatch(updateUser(uid));
//       })
//       .catch(function(error) {
//         console.error('Error updating document: ', error);
//       });
//   };
// };

// export const removeNetwork = (networkObj, currentUser) => {
//   return async dispatch => {
//     const userRef = db.collection('users').doc(currentUser.uid);
//     return db
//       .runTransaction(transaction => {
//         return transaction.get(userRef).then(function(user) {
//           if (!user.exists) {
//             throw 'Document does not exist!';
//           }
//           const currentNetworks = user.data().socialNetworks;
//           const filteredNetworks = currentNetworks.filter(networks => {
//             return networks.source !== networkObj.source;
//           });
//           // currentUser.socialNetworks = filteredNetworks;
//           transaction.update(userRef, { socialNetworks: filteredNetworks });
//           return user.data().uid;
//         });
//       })
//       .then(function(uid) {
//         console.log('Document successfully updated ', uid);
//         dispatch(updateUser(uid));
//         // dispatch(userUpdated(currentUser));
//       })
//       .catch(function(error) {
//         console.error('Error updating document: ', error);
//       });
//   };
// };
// export const addNewChatToCurrentUser = (userToMsgInfo, userInfo) => {
//   return async dispatch => {
//     const userChatsUpdated = userInfo.conversations.concat(userToMsgInfo);
//     const updatedUserInfo = userInfo;
//     updatedUserInfo.conversations = userChatsUpdated;
//     const currUserOnRef = db.collection('users').doc(userInfo.uid);
//     currUserOnRef
//       .update({
//         conversations: firebase.firestore.FieldValue.arrayUnion(userToMsgInfo)
//       })
//       .then(function() {
//         dispatch(userUpdated(updatedUserInfo));
//       });
//   };
// };

// const updateUser = uid => {
//   return async dispatch => {
//     const userRef = db.collection('users').doc(uid);
//     userRef
//       .get()
//       .then(function(user) {
//         if (user.exists) {
//           const profile = user.data();
//           dispatch(userUpdated(profile));
//         } else {
//           const msg = 'No such user with that uid';
//           dispatch(profileNotFound(msg));
//         }
//       })
//       .catch(function(error) {
//         const msg = 'Error Retrieving User Document';
//         dispatch(profileNotFound(msg));
//       });
//   };
// };
