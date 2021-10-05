import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {WEB_CLIENT} from '@env';

export const useGoogleServices = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT,
    });
  }, []);
};
