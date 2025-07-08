import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ai.nextax.startsmart',
  appName: 'StartSmart',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    iosScheme: 'https'
  },
  ios: {
    scheme: 'StartSmart'
  },
  android: {
    scheme: 'StartSmart'
  }
};

export default config;
