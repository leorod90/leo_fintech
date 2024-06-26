import CustomBackBtn from '@/components/CustomBackBtn';
import Colors from '@/constants/Colors';
import UserInactivityProvider from '@/context/UserInactivity';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Link, Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const router = useRouter()
  const segments = useSegments()

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  const isSingedIn = true
  useEffect(() => {
    if (!loaded) return
    const inAuthGroup = segments[0] === '(authenticated)'
    if (isSingedIn && !inAuthGroup) {
      router.replace('/(authenticated)/(tabs)/home')
    } else {
      router.replace('/')
    }
  }, [isSingedIn, loaded]);

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{
        title: '',
        headerBackTitle: '',
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Colors.background },
        headerLeft: () => <CustomBackBtn router={router} />
      }} />
      <Stack.Screen name="login" options={{
        title: '',
        headerBackTitle: '',
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Colors.background },
        headerLeft: () => <CustomBackBtn router={router} />,
        headerRight: () => (
          <Link href={'/help'} asChild>
            <Pressable style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 }
            ]}>
              <Ionicons name="help-circle-outline" size={28} color={Colors.dark} />
            </Pressable>
          </Link>
        )
      }} />
      <Stack.Screen name="help" options={{ title: 'Help', presentation: 'modal' }} />
      <Stack.Screen name="verify/[phone]" options={{
        title: '',
        headerBackTitle: '',
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Colors.background },
        headerLeft: () => <CustomBackBtn router={router} />
      }} />
      <Stack.Screen name="(authenticated)/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(authenticated)/(modals)/locked" options={{ headerShown: false, animation: 'none' }} />
      <Stack.Screen name="(authenticated)/(modals)/account"
        options={{
          // headerShown: false,
          presentation: 'transparentModal',
          animation: 'fade_from_bottom',
          title: '',
          headerTransparent: true,
          headerLeft: () => <CustomBackBtn router={router} icon='close-outline' color='white' />
        }}
      />
    </Stack>
  );
}

const RootLayoutNav = () => {
  return (
    <UserInactivityProvider>
      <GestureHandlerRootView>
        <InitialLayout />
      </GestureHandlerRootView>
    </UserInactivityProvider>
  );
}

export default RootLayoutNav;