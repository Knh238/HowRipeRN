import moment from 'moment';
import firebase from '../../../../firebase';
import db from '../../../../db';

export const ALL_LEAGUES_FETCHED = 'ALL_LEAGUES_FETCHED';
export const CURR_LEAGUE_FETCHED = 'CURR_LEAGUE_FETCHED';
export const LEAGUE_NOT_FOUND = 'LEAGUE_NOT_FOUND';

export const LEAGUE_CREATED = 'LEAGUE_CREATED';

export const JOINED_LEAGUE = 'JOINED_LEAGUE';

export const LEAGUE_UPDATED = 'LEAGUE_UPDATED';

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

// join league needs to add
//score: 0, scoreChange:0,currentRank:1
//also needs to add schedule of Scores: week1:{} weekTotal: 0 , film1:0 , film2:0, weekRank:1, seasonTotal:}
//week2{weekTotal: 0 , film1:0 , film2:0, weekRank:1 seasonTotal:}}
//etc

//all being zero until scores locked

//maybe rank is determined by sorting the array of scores and isnt stable on the league?
//or only change when film is scored- maybe updated when film scored.

//when rate a film
//store on user ? as seasonRatings{week 1{ film: , rated: 0, finalRT: 0, pointsEarned:pending}}
//grab data form film?

//need to sort out what screens will have acecss to what

export const allLeaguesfetched = leagueList => {
  return {
    type: ALL_LEAGUES_FETCHED,
    leagueList: leagueList
  };
};
export const currLeaguefetched = currLeague => {
  return {
    type: CURR_LEAGUE_FETCHED,
    currLeagueName: currLeague.name,
    players: currLeague.players
  };
};

export const leagueNotFound = errorMsg => {
  return {
    type: LEAGUE_NOT_FOUND,
    errorMsg
  };
};

export const leagueCreated = leagueInfo => {
  return {
    type: LEAGUE_CREATED,
    leagueInfo
  };
};
export const joinedLeague = league => {
  return {
    type: JOINED_LEAGUE,
    league
  };
};

export const leagueUpdated = leagueList => {
  return {
    type: LEAGUE_UPDATED,
    leagueList: leagueList
  };
};

export function fetchAllLeagues() {
  return async dispatch => {
    //maybe add leagueName and password to this so can check password etc.
    const currLeagues = db.collection('leagues');
    const currLeagueNames = [];
    currLeagues
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          const info = doc.data();
          const league = {
            id: doc.id,
            name: info.name.toLowerCase,
            password: info.password
          };
          currLeagueNames.push(league);
        });
      })
      .then(() => {
        dispatch(allLeaguesfetched(currLeagueNames));
      })
      .catch(function(error) {
        const msg = 'No leagues in DB';
        dispatch(leagueNotFound(msg));
      });
  };
}

export function fetchCurrLeague(leagueID) {
  return async dispatch => {
    var docRef = db.collection('leagues').doc(`${leagueID}`);

    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          const currLeague = doc.data();
          console.log(
            'current league data in fetch currently league',
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
export function createLeague(name, password, userInfo) {
  return async dispatch => {
    const user = firebase.auth().currentUser;
    const currUserRef = db.collection('users').doc(user.uid);
    let leagueID = '';
    const players = [];
    players.push({ displayName: 'Kristin', userID: user.uid });

    currLeagues
      .add({
        name: league,
        password: password,
        players,
        startDate: '',
        scores: []
      })
      .then(function(doc) {
        leagueID = doc.id;
      })
      .then(() => {
        currUserRef.update({ currentLeague: leagueID });
      })
      .then(function() {
        dispatch(userUpdated(newUser));
        dispatch(leagueCreated());
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
        dispatch(createProfileError(error));
      });
  };
}

// export function joinLeague(user,leagueID) {
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

export function updateLeague(property, value) {
  return async dispatch => {
    // const user = firebase.auth().currentUser;
    // const currUserRef = db.collection('users').doc(user.uid);
    // let leagueID = '';
    // const players = [];
    // players.push({ displayName: 'Kristin', userID: user.uid });
    // currLeagues
    //   .add({
    //     name: league,
    //     password: password,
    //     players,
    //     startDate: '',
    //     scores: []
    //   })
    //   .then(function(doc) {
    //     leagueID = doc.id;
    //   })
    //   .then(() => {
    //     currUserRef.update({ currentLeague: leagueID });
    //   })
    // .then(function() {
    //   dispatch(userUpdated(newUser));
    //   dispatch(leagueCreated());
    // })
    // .catch(function(error) {
    //   console.error('Error adding document: ', error);
    //   dispatch(createProfileError(error));
    // });
  };
}

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
