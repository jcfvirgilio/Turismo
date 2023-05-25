import React, { useState, useEffect } from 'react';
import { useTheme, Button, Text, Box } from 'native-base';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import styles from './style';

WebBrowser.maybeCompleteAuthSession();

export function Login(): JSX.Element {
  const theme = useTheme();
  const [token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    // androidClientId:
    //   '341789429260-07dto97diro4qjn0r54eut638tupmpb0.apps.googleusercontent.com',
    // iosClientId:
    //   '341789429260-1rv5e7fb4ar5f9eeolpb36kc63d0h3fu.apps.googleusercontent.com',
    // expoClientId:
    //   '341789429260-rr431gcgr2g44frhsn4g43499jvpeh43.apps.googleusercontent.com',
    // clientId:
    //   '341789429260-rr431gcgr2g44frhsn4g43499jvpeh43.apps.googleusercontent.com',
    androidClientId: process.env.ANDROID_CLIENT_ID,
    iosClientId: process.env.IOS_CLIENT_ID,
    expoClientId:
      '341789429260-rr431gcgr2g44frhsn4g43499jvpeh43.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });

  useEffect(() => {
    console.log('===========,', response);
    if (response?.type === 'success') {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/userinfo/v2/me',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const user = await response.json();
      console.log('USER:', user);
      setUserInfo(user);
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
