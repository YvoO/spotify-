import { ActivityIndicator } from 'react-native';
import { Redirect, Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons'; 

import { useSession } from '../ctx';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    // UNCOMMENT THIS TO DISABLE SIGN IN
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#50c9c3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#50c9c3',
        tabBarActiveBackgroundColor: '#fff',
        tabBarInactiveTintColor: '#424242',
        tabBarInactiveBackgroundColor: '#fff',
      }}
    >
      <Tabs.Screen name="index" options={{
        title: 'Saved tracks',
        tabBarIcon: ({ color }) => <FontAwesome5 name="music" size={18} color={color} />,

      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => <FontAwesome5 name="user-circle" size={18} color={color} />,
      }} />
    </Tabs>
  );
}
