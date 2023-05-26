import React from 'react';
import { useTheme, HStack, Avatar, Text } from 'native-base';

type HeaderProps = {
  imageUri: string;
};

export function Header({ imageUri }: HeaderProps): JSX.Element {
  const theme = useTheme();

  return (
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
  );
}
