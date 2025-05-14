import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { tailwindStyles } from '../nativewind-style';
import { ThemeToggle, ThemeSwitch } from '../components/ThemeToggle';

export default function SettingsScreen() {
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
          Settings
        </Text>
        
        <View style={[
          styles.section,
          { borderBottomColor: isDark ? '#3F3F46' : '#E4E4E7' }
        ]}>
          <Text style={[
            styles.sectionTitle,
            isDark ? tailwindStyles.darkText : tailwindStyles.lightText
          ]}>
            Appearance
          </Text>
          
          <View style={styles.themeToggleContainer}>
            <Text style={[
              styles.settingLabel,
              isDark ? tailwindStyles.darkText : tailwindStyles.lightText
            ]}>
              Dark Mode
            </Text>
            <ThemeSwitch />
          </View>
          
          <View style={styles.spacer} />
          
          <View style={styles.themeToggleContainer}>
            <ThemeToggle />
          </View>
        </View>
        
        <View style={[
          styles.section,
          { borderBottomColor: isDark ? '#3F3F46' : '#E4E4E7' }
        ]}>
          <Text style={[
            styles.sectionTitle,
            isDark ? tailwindStyles.darkText : tailwindStyles.lightText
          ]}>
            About
          </Text>
          
          <Text style={[
            styles.aboutText,
            isDark ? tailwindStyles.darkSecondaryText : tailwindStyles.lightSecondaryText
          ]}>
            This app demonstrates theme switching using React Native's StyleSheet API
            with a zinc-based color palette. The icons are from Microsoft's Fluent UI
            collection.
          </Text>
        </View>
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
  section: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  themeToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  settingLabel: {
    fontSize: 16,
  },
  spacer: {
    height: 24,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
  }
});