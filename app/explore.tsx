import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { tailwindStyles } from '../nativewind-style';

export default function ExploreScreen() {
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
          Explore
        </Text>
        
        <View style={[
          styles.card,
          { backgroundColor: isDark ? '#27272A' : '#F4F4F5' }
        ]}>
          <Text style={[
            styles.cardText,
            isDark ? tailwindStyles.darkText : tailwindStyles.lightText
          ]}>
            Discover new content in the explore tab.
          </Text>
        </View>
        
        {[1, 2, 3].map((item) => (
          <View 
            key={item}
            style={[
              styles.itemCard,
              { backgroundColor: isDark ? '#3F3F46' : '#E4E4E7' }
            ]}
          >
            <Text style={[
              styles.itemTitle,
              isDark ? tailwindStyles.darkText : tailwindStyles.lightText
            ]}>
              Explore Item {item}
            </Text>
            <Text style={[
              styles.itemDescription,
              isDark ? tailwindStyles.darkSecondaryText : tailwindStyles.lightSecondaryText
            ]}>
              This is a sample item in the explore section. Tap to learn more about this item.
            </Text>
          </View>
        ))}
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
  itemCard: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 14,
    lineHeight: 20,
  }
});