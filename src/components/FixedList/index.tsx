import React, { useState } from 'react';
import { useTheme, Container, FlatList, Text } from 'native-base';
import { CustomSpinner } from '../../utils/CustomSpinner';
import { useSelector } from 'react-redux';
import { TouchableOpacity, StyleSheet } from 'react-native';

type ItemData = {
  formatted: string;
  confidence: number;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

export function FixedList({ containerStyle, onItemPress }): JSX.Element {
  const theme = useTheme();

  const places: ItemData[] = useSelector((state) =>
    state.lugares.places?.results.map(({ formatted, confidence }) => {
      return { formatted, confidence };
    }),
  );

  if (!places || !places.length) {
    return <CustomSpinner />;
  }

  const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor }]}
    >
      <Text style={[styles.title, { color: textColor }]}>{item.formatted}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }: ItemProps) => {
    return (
      <Item
        item={item}
        onPress={() => {
          onItemPress(item);
        }}
      />
    );
  };

  return (
    <Container
      style={[styles.container, containerStyle, theme.styles.global.bodyClass]}
    >
      <FlatList
        shadow={5}
        data={places}
        renderItem={renderItem}
        keyExtractor={(item) => item.confidence}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 250,
    zIndex: 1,
    backgroundColor: 'white',
    width: '130%',
  },
  item: {
    paddingBottom: 10,
    marginVertical: 0,
    marginHorizontal: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderBottomColor: 'silver',
  },
  title: {
    fontSize: 16,
  },
});
