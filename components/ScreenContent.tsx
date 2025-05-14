import { Text, View, StyleSheet } from 'react-native';
import { EditScreenInfo } from './EditScreenInfo';
import { tailwindStyles } from '../nativewind-style';
import { useTheme } from '../contexts/ThemeContext';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <View style={styles.container}>
      <Text style={[
        styles.title, 
        isDark ? tailwindStyles.darkText : tailwindStyles.lightText
      ]}>
        {title}
      </Text>
      <View style={[
        styles.divider, 
        isDark ? { backgroundColor: '#3F3F46' } : { backgroundColor: '#E4E4E7' }
      ]} />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    width: '80%',
    marginVertical: 28,
  }
});
