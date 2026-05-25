import '../global.css';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';

export default function RootLayout() {
  useEffect(() => {
    const setupNavBar = async () => {
      if (Platform.OS !== 'android') return;

      try {
        // Hide Android navigation bar
        await NavigationBar.setVisibilityAsync('hidden');

        // Optional immersive mode
        if (NavigationBar.setBehaviorAsync) {
          await NavigationBar.setBehaviorAsync('overlay-swipe');
        }
      } catch (e) {
        console.log('NavigationBar error:', e);
      }
    };

    setupNavBar();
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="light" translucent />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="screens/voice"
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name="screens/loan"
          options={{ presentation: 'card' }}
        />
        <Stack.Screen
          name="screens/scam"
          options={{ presentation: 'card' }}
        />
        <Stack.Screen
          name="screens/rtc"
          options={{ presentation: 'card' }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}