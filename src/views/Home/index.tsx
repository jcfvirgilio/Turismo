import React, { useEffect, useState } from 'react';
import { Box, useSafeArea } from 'native-base';
import { Header } from '../../components/Header';
import { USER_INFO } from '../../consts';
import { getItem } from '../../utils/storage';
import { useNavigation } from '@react-navigation/native';
import { SearchComponent } from '../../components/SearchComponent';

export function Home() {
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

  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
  });

  return (
    <Box {...safeAreaProps}>
      <Header imageUri={userImage} name={name} />
      <SearchComponent navigation={navigation} />
    </Box>
  );
}
