import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Platform } from 'react-native'

// Replace with your Supabase URL and anon key
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || ''

// Check if we're in a React Native environment
const isReactNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative'

// Create a custom storage object that implements the Storage interface
const ExpoSecureStorage = isReactNative
  ? {
      getItem: async (key: string) => {
        return AsyncStorage.getItem(key)
      },
      setItem: async (key: string, value: string) => {
        await AsyncStorage.setItem(key, value)
        return
      },
      removeItem: async (key: string) => {
        await AsyncStorage.removeItem(key)
        return
      },
    }
  : {
      // Fallback for non-RN environments
      getItem: async (key: string) => null,
      setItem: async (key: string, value: string) => {},
      removeItem: async (key: string) => {},
    }

// Initialize the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: Platform.OS === 'web',
  },
})

// Type definitions for Supabase Tables
export type Tables = {
  products: {
    id: string
    title: string
    description: string
    image_url: string
    amazon_url: string
    category: string
    tags: string[]
    created_at?: string
  }
  // Add other tables as needed
} 