import React, { useEffect, useState } from 'react';
import { useTheme, HStack, Avatar, Text, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { LOGIN, USER_INFO } from '../../consts';
import { getItem, clearAll } from '../../utils/storage';
import { Ionicons } from '@expo/vector-icons';

export function Header({ showBack }): JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  const [userImage, setUserImage] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    let userInfo = await getItem(USER_INFO);
    let { picture, name } = JSON.parse(userInfo);
    setUserImage(picture);
    setName(name);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCloseSession = async () => {
    await clearAll();
    navigation.navigate(LOGIN);
  };
  return (
    <HStack
      style={theme.styles.global.headerBarClass}
      display="flex"
      justifyContent="space-between"
      alignItems={'center'}
    >
      {showBack && (
        <>
          <HStack>
            <Ionicons
              name="arrow-back"
              size={20}
              color="white"
              onPress={handleBackPress}
            />
          </HStack>
          <HStack>
            <Ionicons
              name="exit"
              size={20}
              color="white"
              onPress={handleCloseSession}
            />
          </HStack>
        </>
      )}
      <HStack alignItems="center">
        <Text style={theme.styles.global.title}>{name}</Text>
      </HStack>
      <HStack>
        <Avatar
          bg="green.500"
          source={{
            uri: userImage,
          }}
        />
      </HStack>
    </HStack>
  );
}
