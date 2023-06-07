import React from 'react';
import { Linking } from 'react-native';
import {
  useTheme,
  VStack,
  Box,
  Text,
  Divider,
  HStack,
  Button,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  description: string;
  location: string;
  geolocal: string;
};

export function CardCustom({
  title,
  description,
  location,
  geolocal,
}: Props): JSX.Element {
  const theme = useTheme();

  const handleLocation = (geolocal: string) => {
    Linking.openURL(`https://www.google.com.mx/maps/place/${geolocal}`);
  };

  return (
    <Box rounded="md" bg="white" px="3" mb={3}>
      <VStack space="1" divider={<Divider />}>
        <HStack alignItems="center" space={2} pt={4}>
          <Ionicons name="book" size={16} color="#FC990E" />
          <Text style={theme.styles.global.titleCard}>{title}</Text>
        </HStack>
        <Box>{description}</Box>
        <Button
          shadow={5}
          mb={5}
          w="100%"
          backgroundColor="customButtonGoogle"
          leftIcon={<Ionicons name="navigate" size={12} color="white" />}
          onPress={() => handleLocation(geolocal)}
        >
          <Text color="white">Ubicación: {location}</Text>
        </Button>
      </VStack>
    </Box>
  );
}
