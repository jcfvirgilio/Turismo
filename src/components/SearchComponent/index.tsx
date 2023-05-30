import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { RESULTS } from '../../consts';
import { FixedList } from '../FixedList';
import LoadingPageResults from '../../views/LoadingPage/LoadingPageResults';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationsActions } from '../../redux/actions/lugaresAction';
import {
  useTheme,
  VStack,
  Heading,
  Center,
  Input,
  Stack,
  Button,
  FormControl,
  Text,
} from 'native-base';

type FormData = {
  destiny: string;
  hobbies: string;
};

export function SearchComponent({ navigation }): JSX.Element {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPlaces, setShowPlaces] = useState(false);
  const dispatch = useDispatch();

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.destiny) {
      newErrors.destiny = 'Escribe un destino';
    }
    if (!formData.hobbies) {
      newErrors.hobbies = 'Escribe uno o varios hobbies';
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleDestinationKeyPress = ({ nativeEvent }) => {
    const destiny = formData.destiny;

    if (destiny?.length > 2) {
      dispatch(
        getLocationsActions({
          query: destiny,
        }),
      );
      setShowPlaces(true);
    } else {
      setShowPlaces(false);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // try {
    //   if (validate()) {
    //     const response = await OpenAI();
    //     console.log('--------------', response);
    //     navigation.navigate(RESULTS, { result: response });
    //   }
    // } catch (error) {
    //   alert(error);
    // }
    //setIsLoading(false);
  };

  const handlePlaceItemPress = (placeSelected) => {
    console.log('Seleccionado:', placeSelected.formatted);
    handleChange('destiny', placeSelected.formatted.split(',')[0]);
    // setFormData((prevData) => ({
    //   ...prevData,
    //   destiny: placeSelected.formatted,
    // }));
    setShowPlaces(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingPageResults />
      ) : (
        <VStack>
          <Center h="85%">
            <Heading style={theme.styles.global.headerClass}>Travesía</Heading>
            <Stack space={4} w="85%">
              <FormControl isRequired isInvalid={errors.destiny}>
                <Input
                  variant="underlined"
                  placeholder="Destino*"
                  style={[theme.styles.global.inputClass]}
                  InputLeftElement={
                    <Ionicons
                      shadow={5}
                      name="airplane"
                      size={16}
                      color="black"
                    />
                  }
                  value={formData.destiny}
                  onChangeText={(value) => handleChange('destiny', value)}
                  onKeyPress={handleDestinationKeyPress}
                />

                {errors.destiny && (
                  <FormControl.ErrorMessage>
                    {errors.destiny}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>

              {showPlaces && (
                <FixedList
                  containerStyle={{ top: 60 }}
                  onItemPress={handlePlaceItemPress}
                />
              )}

              <FormControl isRequired isInvalid={errors.hobbies}>
                <Input
                  variant="underlined"
                  placeholder="Hoobies*"
                  style={theme.styles.global.inputClass}
                  InputLeftElement={
                    <Ionicons shadow={5} name="book" size={16} color="black" />
                  }
                  //value={hobbies}
                  onChangeText={(value) => handleChange('hobbies', value)}
                />
                <Text style={theme.styles.global.label} pt={5}>
                  Ej. Cultura, Fiesta, Naturaleza...
                </Text>
                {errors.hobbies && (
                  <FormControl.ErrorMessage>
                    {errors.hobbies}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
              <Button
                shadow={5}
                background="customButton"
                size="sm"
                _text={{ fontSize: 18 }}
                style={theme.styles.global.inputClass}
                leftIcon={
                  <Ionicons name="ios-search" size={24} color="white" />
                }
                isDisabled={!validate()}
                onPress={handleSubmit}
              >
                Buscar
              </Button>
            </Stack>
          </Center>
        </VStack>
      )}
    </>
  );
}
