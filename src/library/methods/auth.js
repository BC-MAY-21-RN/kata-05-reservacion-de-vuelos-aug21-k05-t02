import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

export const register = async (email, password, username) => {
  return await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {     
      user
        .updateProfile({displayName: username})
        .then(() => createAditionalData());
    })
    .catch(error => {
    
    });
};
export const login = async (email, password, navigation) => {
  return await auth()
    .signInWithEmailAndPassword(email, password)
    .then(({user}) => {
      navigation.navigate('MyFlights');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
      }

      if (error.code === 'auth/invalid-email') {
      }
    });
};

export const logout = async () => {
  return await auth()
    .signOut()
};

export const onGoogleButtonPress = async navigation => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
 return await auth()
    .signInWithCredential(googleCredential)
    .then(response => {
      if (response) {
        createAditionalData();
        navigation.navigate('MyFlights');
      }
    });
};

const createAditionalData = () => {
  firestore()
    .collection('reservas')
    .doc(auth().currentUser.uid)
    .get()
    .then(response => {
      if (!response.exists) {
        firestore().collection('reservas').doc(auth().currentUser.uid).set({
          flights: [],
        });
      }
    });
};
