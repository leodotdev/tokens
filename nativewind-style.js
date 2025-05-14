import { StyleSheet } from 'react-native';

// Standard React Native styles using Zinc color palette
export const tailwindStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: '#18181B', // Zinc-900
  },
  lightContainer: {
    backgroundColor: '#FFFFFF', // White
  },
  
  // Text styles
  darkText: {
    color: '#F4F4F5', // Zinc-100
  },
  lightText: {
    color: '#27272A', // Zinc-800
  },
  darkSecondaryText: {
    color: '#A1A1AA', // Zinc-400
  },
  lightSecondaryText: {
    color: '#71717A', // Zinc-500
  },
  
  // Button styles
  toggleButton: {
    marginTop: 16,
    height: 40,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
  darkToggleButton: {
    backgroundColor: '#D4D4D8', // Zinc-300
  },
  lightToggleButton: {
    backgroundColor: '#3F3F46', // Zinc-700
  },
  toggleButtonText: {
    fontWeight: '500',
  },
  darkToggleButtonText: {
    color: '#18181B', // Zinc-900
  },
  lightToggleButtonText: {
    color: '#FFFFFF', // White
  },
  
  // Switch styles
  themeSwitch: {
    height: 32,
    width: 64,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    padding: 4,
  },
  darkThemeSwitch: {
    justifyContent: 'flex-end',
    backgroundColor: '#3F3F46', // Zinc-700
  },
  lightThemeSwitch: {
    justifyContent: 'flex-start',
    backgroundColor: '#D4D4D8', // Zinc-300
  },
  switchThumb: {
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
  darkSwitchThumb: {
    backgroundColor: '#D4D4D8', // Zinc-300
  },
  lightSwitchThumb: {
    backgroundColor: '#52525B', // Zinc-600
  },
  
  // Layout styles
  centerItems: {
    alignItems: 'center',
  },
  marginTop2: {
    marginTop: 8,
  },
  height6: {
    height: 24,
  },
});