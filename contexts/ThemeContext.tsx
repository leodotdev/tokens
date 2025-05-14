import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme, View, StyleSheet } from 'react-native';
import { tailwindStyles } from '../nativewind-style';

// Define theme types
export type ThemeType = 'light' | 'dark' | 'system';

// Define the context shape
type ThemeContextType = {
  theme: ThemeType;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
};

// Create the context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Get system color scheme
  const systemColorScheme = useColorScheme();
  
  // State to track the chosen theme
  const [theme, setTheme] = useState<ThemeType>('system');
  
  // Computed resolved theme based on system or chosen
  const resolvedTheme = theme === 'system' 
    ? (systemColorScheme === 'dark' ? 'dark' : 'light')
    : theme;

  // Toggle between light and dark
  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(systemColorScheme === 'dark' ? 'light' : 'dark');
    } else {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  // Update if system theme changes
  useEffect(() => {
    if (theme === 'system') {
      // This will trigger re-render when system theme changes
    }
  }, [systemColorScheme, theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
      }}
    >
      <View style={[
        tailwindStyles.container, 
        resolvedTheme === 'dark' ? tailwindStyles.darkContainer : tailwindStyles.lightContainer
      ]}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
};