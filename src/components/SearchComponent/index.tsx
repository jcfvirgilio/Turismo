import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { RESULTS } from '../../consts';
import { FixedList } from '../FixedList';
import LoadingPageResults from '../../views/LoadingPage/LoadingPageResults';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLocationsActions,
  actionResults,
} from '../../redux/actions/lugaresAction';
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
  const resultsIA = useSelector((state) => state.rootReducer.resultsIA);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!resultsIA?.trim()) {
      setIsLoading(false);
      navigation.navigate(RESULTS);
    }
  }, [resultsIA]);

  const validate = () => {
    const regex = /^[\p{L}\d\s]+(?:,\s*[\p{L}\d\s]+)*$/u;
    const isValidFormat =
      regex.test(formData.hobbies?.trim()) && formData.hobbies?.trim() !== '';

    if (!formData.destiny) {
      errors.destiny = 'Escribe un destino';
    } else {
      errors.destiny = '';
    }

    if (!formData.hobbies) {
      errors.hobbies = 'Escribe uno o varios hobbies';
    } else {
      errors.hobbies = '';
    }

    if (!isValidFormat) {
      errors.hobbies = 'El formato no es valido, Ej: cultura, música';
    } else {
      errors.hobbies = '';
    }

    return errors.hobbies === '' && errors.destiny === '';
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleDestinationKeyPress = () => {
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
    if (validate()) {
      dispatch(actionResults(formData));
    }
  };

  const handlePlaceItemPress = (placeSelected) => {
    console.log('Seleccionado:', placeSelected.formatted);
    handleChange('destiny', placeSelected.formatted.split(',')[0]);
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
                  placeholder="Escribe mínimo 2 Hoobies*"
                  style={theme.styles.global.inputClass}
                  InputLeftElement={
                    <Ionicons shadow={5} name="book" size={16} color="black" />
                  }
                  onChangeText={(value) => handleChange('hobbies', value)}
                />

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
