import React, { useState, useEffect } from 'react';
import { useTheme, Button, Text, Box } from 'native-base';
import * as WebBrowser from 'expo-web-browser';
import { saveItem } from '../../utils/storage';
import { ACCESS_TOKEN, USER_INFO, GOOGLE_SUCCESS_MESSAGE } from '../../consts';
import * as Google from 'expo-auth-session/providers/google';
import styles from './style';

WebBrowser.maybeCompleteAuthSession();

export function Login(): JSX.Element {
  const theme = useTheme();
  const [token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.ANDROID_CLIENT_ID,
    iosClientId: process.env.IOS_CLIENT_ID,
    expoClientId:
      '341789429260-rr431gcgr2g44frhsn4g43499jvpeh43.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      console.log('RESPONSE::', response);
      setToken(response.authentication.accessToken);
      saveToken();
      getUserInfo();
    }
  }, [response, token]);

  const saveToken = async () => {
    const tokenResult = await saveItem(ACCESS_TOKEN, token);
    console.log('tokenResult::', tokenResult);
  };

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/userinfo/v2/me',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const user = await response.json();
      const userResult = await saveItem(USER_INFO, JSON.stringify(user));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box backgroundColor="customWhite" style={styles.content}>
      <Text style={theme.styles.global.headerClass}>Bienvenidos</Text>
      <Text style={theme.styles.global.bodyClass}>
        Inicie sesión para continuar
      </Text>
      <Button
        backgroundColor="customBlue"
        shadow={5}
        style={styles.button}
        size="lg"
        onPress={() => {
          promptAsync();
        }}
      >
        Acceder
      </Button>
    </Box>
  );
}
