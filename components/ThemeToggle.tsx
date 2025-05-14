import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { tailwindStyles } from '../nativewind-style';

// Simple component showing the current theme and toggle button
export const ThemeToggle = () => {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <View style={tailwindStyles.centerItems}>
      <TouchableOpacity
        onPress={toggleTheme}
        style={[
          tailwindStyles.toggleButton,
          isDark ? tailwindStyles.darkToggleButton : tailwindStyles.lightToggleButton
        ]}
        activeOpacity={0.7}
      >
        <Image 
          source={isDark ? require('../assets/emoji/moon.png') : require('../assets/emoji/sun.png')}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      
      <Text style={[
        tailwindStyles.marginTop2,
        isDark ? tailwindStyles.darkText : tailwindStyles.lightText
      ]}>
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </Text>
    </View>
  );
};

// A more elaborate theme toggle that looks like a switch
export const ThemeSwitch = () => {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[
        tailwindStyles.themeSwitch,
        isDark ? tailwindStyles.darkThemeSwitch : tailwindStyles.lightThemeSwitch
      ]}
      activeOpacity={0.8}
    >
      <View
        style={[
          tailwindStyles.switchThumb,
          isDark ? tailwindStyles.darkSwitchThumb : tailwindStyles.lightSwitchThumb
        ]}
      >
        <Image 
          source={isDark ? require('../assets/emoji/moon.png') : require('../assets/emoji/sun.png')}
          style={{ width: 18, height: 18 }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};