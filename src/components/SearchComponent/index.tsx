import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  useTheme,
  VStack,
  Heading,
  Center,
  Input,
  Stack,
  Button,
} from 'native-base';

export function SearchComponent(): JSX.Element {
  const theme = useTheme();

  return (
    <VStack shadow={5}>
      <Center h="85%">
        <Heading style={theme.styles.global.headerClass}>Travesía</Heading>
        <Stack space={4} w="85%">
          <Input
            variant="underlined"
            placeholder="Destino"
            style={theme.styles.global.inputClass}
            InputLeftElement={
              <Ionicons name="airplane" size={16} color="black" />
            }
          />
          <Input
            variant="underlined"
            placeholder="Hoobies"
            style={theme.styles.global.inputClass}
            InputLeftElement={<Ionicons name="book" size={16} color="black" />}
          />

          <Button
            bg="#FC990E"
            fontSize="md"
            leftIcon={<Ionicons name="ios-search" size={12} color="white" />}
          >
            Buscar
          </Button>
        </Stack>
      </Center>
    </VStack>
  );
}
