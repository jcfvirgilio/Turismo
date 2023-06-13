import React, { useState, useEffect } from 'react';
import { useTheme, Button, Text, Box, Center, Heading } from 'native-base';

import axios from 'axios';
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
  const [isToken, setIsToken] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId,
    iosClientId,
    expoClientId,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      saveToken(response.authentication.accessToken);
    }
  }, [response]);

  useEffect(() => {
    infoUser();
  }, [token]);

  const infoUser = () => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = 'https://www.googleapis.com/userinfo/v2/me';
    axios
      .get(url, config)
      .then((response) => {
        console.log(response.data);
        saveUser(response.data);
        redirect();
      })
      .catch((error) => {
        console.log('getUserInfo:' + error);
      });
  };

  const saveToken = async (responseToken: string) => {
    let tokenResult = await saveItem(ACCESS_TOKEN, responseToken);
    setToken(responseToken);
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
