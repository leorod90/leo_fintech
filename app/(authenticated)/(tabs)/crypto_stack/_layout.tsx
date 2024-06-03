import CustomBackBtn from '@/components/CustomBackBtn';
import CustomerHeader from '@/components/CustomerHeader';
import Colors from '@/constants/Colors';
import { Stack, useRouter } from 'expo-router';

const InitialLayout = () => {
  const router = useRouter()

  return (
    <Stack screenOptions={{
      // headerShown: false,
    }}>
      <Stack.Screen name="crypto"
        options={{
          title: '',
          header: () => <CustomerHeader />,
          headerTransparent: true
        }}
      />
      <Stack.Screen name="details/[id]"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: () => <CustomBackBtn router={router} />,
          headerTransparent: true,
          headerLargeTitle: true
        }} />
    </Stack>
  );
}


export default InitialLayout;