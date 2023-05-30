import {
  Box,
  Center,
  HStack,
  VStack,
  Skeleton,
  useMediaQuery,
} from 'native-base';
import React from 'react';

export default function LoadingPageResults() {
  const [isSmallScreen] = useMediaQuery({
    minHeight: 280,
    maxHeight: 480,
  });
  return (
    <Box>
      <Center w="100%" h="90%">
        {isSmallScreen ? (
          <HStack w="90%" maxW="400" space={8} rounded="md">
            <VStack flex="3" space="4">
              <Skeleton />
              <Skeleton.Text />
              <Skeleton.Text />
            </VStack>
          </HStack>
        ) : (
          <HStack w="90%" maxW="400" space={8} rounded="md">
            <VStack flex="3" space="4">
              <Skeleton />
              <Skeleton.Text />
              <Skeleton.Text />
            </VStack>
          </HStack>
        )}
      </Center>
    </Box>
  );
}
