import React from 'react';
import { CardCustom } from '../../components/Card';
import { ScrollView } from 'native-base';
import {
  useTheme,
  Box,
  useSafeArea,
  Heading,
  Text,
  Divider,
} from 'native-base';

type Props = {
  result: string;
};

export const Results = ({ result }: Props) => {
  const theme = useTheme();
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
  });

  console.info('RESULT:', result);
  return (
    <Box {...safeAreaProps}>
      <Box ml={3} w="95%">
        <Heading shadow={2} style={theme.styles.global.headerClass}>
          Resultados
        </Heading>
        <Text mt={-5}>
          Prueba de software con AI: Solo se muestran 2 resultados como ejemplo.
        </Text>
      </Box>
      <ScrollView w="93%" h="93%" ml={3}>
        <Divider my="2" bg="gray.300" />
        <CardCustom />
        <CardCustom />
      </ScrollView>
    </Box>
  );
};
