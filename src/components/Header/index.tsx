import React from 'react';
import { useTheme, HStack, VStack, Avatar } from 'native-base';

type HeaderProps = {
  imageUri: string;
  navigation: object;
};

export function Header({ imageUri, navigation }: HeaderProps): JSX.Element {
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
