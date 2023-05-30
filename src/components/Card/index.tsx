import React from 'react';
import { VStack, Box, Text, Divider, HStack, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export function CardCustom(): JSX.Element {
  return (
    <Box rounded="md" bg="white" px="3" mb={3}>
      <VStack space="1" divider={<Divider />}>
        <HStack alignItems="center" space={2} pt={4} shadow={5}>
          <Ionicons name="book" size={16} color="#FC990E" />
          <Box>This is a box with an icon</Box>
        </HStack>
        <Box>
          NativeBase is a free and open source framework that enable developers
          to build high-quality mobile apps using React Native iOS and Android
          apps with a fusion of ES6.
        </Box>
        <Button
          shadow={5}
          pb="2"
          mb={2}
          w={100}
          backgroundColor="customButtonGoogle"
          leftIcon={<Ionicons name="navigate" size={12} color="white" />}
        >
          Ubicación
        </Button>
      </VStack>
    </Box>
  );
}
