import React, { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Spinner,
  HStack,
  Skeleton,
  VStack,
  Center,
  Box,
  useTheme,
  useMediaQuery,
} from 'native-base';
import { useHeaderHeight } from '@react-navigation/elements';
import { LOGIN } from '../../consts';

interface LoadingPageProps {
  navigation: NativeStackNavigationProp<any>;
}

export function LoadingPage({ navigation }: LoadingPageProps): JSX.Element {
  const theme = useTheme();
  const headerHeight = useHeaderHeight();

  const [isSmallScreen] = useMediaQuery({
    minHeight: 280,
    maxHeight: 480,
  });

  useEffect(() => {
    navigation.navigate(LOGIN);
  });

  return (
    <Box backgroundColor="customBlue">
      <Center w="100%" h="100%">
        {isSmallScreen ? (
          <HStack w="90%" maxW="400" space={8} rounded="md">
            <VStack flex="3" space="4">
              <Skeleton startColor="customTeal" />
              <Skeleton.Text startColor="customTeal" />
              <Skeleton.Text startColor="customTeal" />
            </VStack>
          </HStack>
        ) : (
          <HStack w="90%" maxW="400" space={8} rounded="md" p="4">
            <VStack flex="3" space="4">
              <Skeleton startColor="customTeal" />
              <Skeleton.Text startColor="customTeal" />
              <Skeleton.Text startColor="customTeal" />
            </VStack>
          </HStack>
        )}
      </Center>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
