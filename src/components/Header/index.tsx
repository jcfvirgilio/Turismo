import React from 'react';
import { useTheme, HStack, Avatar, Box, VStack, Center } from 'native-base';
import { SearchComponent } from '../SearchComponent';
type HeaderProps = {
  imageUri: string;
};

export function Header({ imageUri }: HeaderProps): JSX.Element {
  const theme = useTheme();

  return (
    <VStack>
      <HStack style={theme.styles.global.headerBarClass}>
        <HStack alignItems="center" />
        <HStack>
          <Avatar
            bg="green.500"
            source={{
              uri: imageUri,
            }}
          />
        </HStack>
      </HStack>
      <SearchComponent />
    </VStack>
  );
}
