import React, { useEffect, useState } from 'react';
import { Box, useSafeArea } from 'native-base';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { SearchComponent } from '../../components/SearchComponent';

export function Home() {
  const navigation = useNavigation();

  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
  });

  return (
    <Box {...safeAreaProps}>
      <Header />
      <SearchComponent navigation={navigation} />
    </Box>
  );
}
