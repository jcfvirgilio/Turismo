import React from 'react';
import { useTheme, HStack, VStack, Avatar, Text } from 'native-base';

type HeaderProps = {
  imageUri: string;
  navigation: object;
};

export function Header({
  imageUri,
  name,
  navigation,
}: HeaderProps): JSX.Element {
  const theme = useTheme();

  return (
    <HStack style={theme.styles.global.headerBarClass}>
      <HStack alignItems="center">
        <Text style={theme.styles.global.title}>{name}</Text>
      </HStack>
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
