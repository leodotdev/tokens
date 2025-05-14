import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { tailwindStyles } from '../nativewind-style';

export default function HomeScreen() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <ScrollView style={[
      styles.container,
      isDark ? tailwindStyles.darkContainer : tailwindStyles.lightContainer
    ]}>
      <View style={styles.content}>
        <Text style={[
          styles.title,
          isDark ? tailwindStyles.darkText : tailwindStyles.lightText
        ]}>
          Welcome to the Home Screen
        </Text>
        
        <View style={[
          styles.card,
          { backgroundColor: isDark ? '#27272A' : '#F4F4F5' }
        ]}>
          <Text style={[
            styles.cardText,
            isDark ? tailwindStyles.darkText : tailwindStyles.lightText
          ]}>
            This is a sample home screen with tabbed navigation.
          </Text>
        </View>
        
        <View style={styles.spacer} />
        
        <Text style={[
          styles.paragraph,
          isDark ? tailwindStyles.darkSecondaryText : tailwindStyles.lightSecondaryText
        ]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam vel nisl
          pharetra aliquam. Praesent vel nisi in odio tincidunt tincidunt. Vivamus vel nunc
          vel urna aliquam ultricies.
        </Text>
        
        <Text style={[
          styles.paragraph,
          isDark ? tailwindStyles.darkSecondaryText : tailwindStyles.lightSecondaryText
        ]}>
          Sed et mauris auctor, aliquam eros eget, feugiat nisi. Integer vel libero vel eros
          facilisis lacinia in vel neque. Nulla facilisi. Suspendisse potenti.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
  },
  spacer: {
    height: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
});