import React, { useEffect } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CustomSpinner } from '../../../utils/CustomSpinner';
import { useHeaderHeight } from '@react-navigation/elements';
import { LOGIN, HOME, ACCESS_TOKEN, RESULTS } from '../../../consts';
import { getItem } from '../../../utils/storage';

interface LoadingPageProps {
  navigation: NativeStackNavigationProp<any>;
}

export function LoadingPage({ navigation }: LoadingPageProps): JSX.Element {
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    redirect();
  }, []);

  const redirect = async () => {
    const token = await getItem(ACCESS_TOKEN);
    navigation.navigate(token ? HOME : LOGIN);
  };

  return <CustomSpinner />;
}
