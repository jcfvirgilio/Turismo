import Constants from 'expo-constants';

const PRODUCTION = 'production';
const STAGING = 'staging';
const DEV = 'dev';

const ENV = {
  dev: {
    androidClientId: [secret],
    iosClientId: [secret],
    expoClientId: [secret],
    openaiId: [secret],
  },
  staging: {
    androidClientId: null,
    iosClientId: null,
    expoClientId: null,
    openaiId: null,
  },
  production: {
    androidClientId: null,
    iosClientId: null,
    expoClientId: null,
    openaiId: null
  }
};

export default (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === STAGING) {
    return ENV.staging;
  } else if (env === PRODUCTION) {
    return ENV.production;
  }
}


