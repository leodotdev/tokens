import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

function TabBarIcon({ name, focused }: { name: string; focused: boolean }) {
  let emoji = '🏠';
  
  if (name === 'home') {
    emoji = '🏠';
  } else if (name === 'explore') {
    emoji = '🌎';
  } else if (name === 'settings') {
    emoji = '⚙️';
  }
  
  return (
    <Text
      style={{
        fontSize: 24,
        opacity: focused ? 1 : 0.5,
      }}
    >
      {emoji}
    </Text>
  );
}

function TabLayout() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? '#18181B' : '#FFFFFF',
          borderTopColor: isDark ? '#3F3F46' : '#E4E4E7',
          paddingBottom: 8,
          height: 60,
        },
        tabBarActiveTintColor: isDark ? '#D4D4D8' : '#3F3F46',
        tabBarInactiveTintColor: isDark ? '#71717A' : '#A1A1AA',
        tabBarIconStyle: { marginTop: 4 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
        headerStyle: {
          backgroundColor: isDark ? '#18181B' : '#FFFFFF',
          borderBottomColor: isDark ? '#3F3F46' : '#E4E4E7',
          borderBottomWidth: 1,
        },
        headerTintColor: isDark ? '#F4F4F5' : '#27272A',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon name="home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => <TabBarIcon name="explore" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon name="settings" focused={focused} />,
        }}
      />
    </Tabs>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <TabLayout />
    </ThemeProvider>
  );
}