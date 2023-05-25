import React from 'react';
import { Spinner, VStack, Center } from 'native-base';

export function CustomSpinner(): JSX.Element {
  return (
    <VStack space="center" alignItems="center">
      <Center w="64" h="200" shadow={3}>
        <Spinner size="lg" />
      </Center>
    </VStack>
  );
}
