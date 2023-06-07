import React from 'react';
import { CardCustom } from '../../components/Card';
import { ScrollView } from 'native-base';
import { useSelector } from 'react-redux';
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
  const resultsIA: string = useSelector((state) => state.rootReducer.resultsIA);

  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
  });

  return (
    <Box {...safeAreaProps}>
      <Box ml={3} w="95%">
        <Heading shadow={2} style={theme.styles.global.headerClass}>
          Resultados
        </Heading>
        <Text mt={-5}>
          Prueba de software con AI: Solo se muestran 3 resultados como ejemplo.
        </Text>
      </Box>
      <ScrollView w="93%" h="93%" ml={3}>
        <Divider my="2" bg="gray.300" />
        {resultsIA.split('@').map((seccion, index) => {
          const data = seccion.split('|');
          const title = data[0]?.split(':')[1];
          const description = data[1]?.split(':')[1];
          const location = data[2]?.split(':')[1];
          const geoLocal = data[3]?.split(':')[1];

          if (title) {
            console.log('description:', data);
            return (
              <CardCustom
                key={index}
                title={title}
                description={description}
                location={location}
                geolocal={geoLocal}
              />
            );
          }
        })}
      </ScrollView>
    </Box>
  );
};
