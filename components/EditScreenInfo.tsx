import { Text, View, StyleSheet } from 'react-native';
import { tailwindStyles } from '../nativewind-style';
import { useTheme } from '../contexts/ThemeContext';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View>
      <View style={styles.container}>
        <Text style={[
          styles.title,
          isDark ? tailwindStyles.darkText : tailwindStyles.lightText
        ]}>
          {title}
        </Text>
        <View style={[
          styles.pathContainer,
          isDark ? { backgroundColor: '#27272A' } : { backgroundColor: '#F4F4F5' }
        ]}>
          <Text style={[
            styles.pathText,
            isDark ? { color: '#D4D4D8' } : { color: '#3F3F46' }
          ]}>
            {path}
          </Text>
        </View>
        <Text style={[
          styles.description,
          isDark ? tailwindStyles.darkSecondaryText : tailwindStyles.lightSecondaryText
        ]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 48,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 24,
  },
  pathContainer: {
    marginVertical: 8,
    borderRadius: 6,
    paddingHorizontal: 4,
  },
  pathText: {
    fontWeight: '500',
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 24,
  }
});