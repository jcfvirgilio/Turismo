import React, { useState, useEffect } from 'react';
import { useTheme, Button, Text, Box, Center, Heading } from 'native-base';

import * as WebBrowser from 'expo-web-browser';
import { saveItem, getItem } from '../../utils/storage';
import { ACCESS_TOKEN, USER_INFO, HOME } from '../../consts';
import environment from '../../../environment';
import * as Google from 'expo-auth-session/providers/google';
import { Ionicons } from '@expo/vector-icons';

WebBrowser.maybeCompleteAuthSession();

const { androidClientId, iosClientId, expoClientId } = environment();

export function Login({ navigation }): JSX.Element {
  const theme = useTheme();
  const [isToken, setIsToken] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [token, setToken] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId,
    iosClientId,
    expoClientId,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setToken(response.authentication.accessToken);
      saveToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, isToken]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/userinfo/v2/me',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const userResponse = await response.json();
      console.log('userResponse::::', userResponse);
      saveUser(userResponse);
      redirect();
    } catch (error) {
      alert('getUserInfo:' + error);
    }
  };

  const saveToken = async (token: string) => {
    let tokenResult = await saveItem(ACCESS_TOKEN, token);
    setIsToken(tokenResult);
  };

  const saveUser = async (userInfo: object) => {
    let userResult = await saveItem(USER_INFO, JSON.stringify(userInfo));
    setIsUser(userResult);
  };

  const redirect = () => {
    if (isUser && isToken) {
      navigation.navigate(HOME);
    } else {
      alert('Error al iniciar sesion');
    }
  };

  return (
    <Center h="100%">
      <Box h="20%">
        <Center h="30%">
          <Heading style={theme.styles.global.headerClass}>Bienvenidos</Heading>
          <Text style={theme.styles.global.bodyClass}>Inicie sesión</Text>
        </Center>
      </Box>
      <Button
        backgroundColor="customButtonGoogle"
        shadow={5}
        w="70%"
        leftIcon={<Ionicons name="logo-google" size={32} color="white" />}
        onPress={() => {
          promptAsync();
        }}
      >
        Google
      </Button>
    </Center>
  );
}
