import React, { useEffect, useState } from 'react';
import { Box, useSafeArea } from 'native-base';
import { Header } from '../../components/Header';
import { USER_INFO } from '../../consts';
import { getItem } from '../../utils/storage';
import { useNavigation } from '@react-navigation/native';
import { SearchComponent } from '../../components/SearchComponent';

export function Home() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState<string | undefined>();

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    let userInfo = await getItem(USER_INFO);
    let { picture } = JSON.parse(userInfo);
    setUserData(picture);
  };

  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
  });

  return (
    <Box {...safeAreaProps}>
      <Header imageUri={userData} />
      <SearchComponent navigation={navigation} />
    </Box>
  );
}
