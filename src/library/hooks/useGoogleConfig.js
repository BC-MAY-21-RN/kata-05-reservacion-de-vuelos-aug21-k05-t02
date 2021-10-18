import {useEffect} from 'react';
import {secret} from '../constants';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export const useGoogleConfig = (navigation) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: secret.webClientId,
    });
  }, []);
  const singInWithGoogle = async () => {
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth()
      .signInWithCredential(googleCredential)
      .then(resp => {
        createAditionalData(resp)
        navigation.navigate('Home')
      }
        )
      .catch(err => console.log(err));
  };
  return [singInWithGoogle];
};

const createAditionalData = () => {
  firestore()
    .collection('userData')
    .doc(auth().currentUser.uid)
    .set({name: auth().currentUser.displayName})
    .then(resp => {
      firestore()
        .collection('reservas')
        .doc(auth().currentUser.uid)
        .get()
        .then(response => {
          if (!response.exists) {
            firestore()
              .collection('reservas')
              .doc(auth().currentUser.uid)
              .set({flights: []});
          }
        })
        .catch(err => console.log('ERRORR AL AGREGAR VUELOS', err));
    })
    .catch(err => console.log('ERRORR AL AGREGAR DATOS', err));
};
