# Tokens App

A product showcase application built with Expo, Gluestack UI, and Supabase.

## Features

- Display products grouped by category
- View products in a responsive 2-column grid
- Open Amazon product links directly from the app
- Built with Expo Router for navigation
- Styled with Gluestack UI components

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a `.env.local` file in the root directory with your Supabase credentials:
   ```
   EXPO_PUBLIC_SUPABASE_URL=your-supabase-project-url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
4. Run the app:
   ```bash
   npm start
   # or
   yarn start
   ```

## Supabase Setup

1. Create a Supabase project
2. Run the SQL migration in `migrations/create_products_table.sql` to create the products table
3. The migration will add sample product data to get you started

## Project Structure

- `app/` - Expo Router pages
- `components/` - UI components
  - `custom/` - Custom components
  - `ui/` - Gluestack UI components
- `lib/` - Utility functions and configurations
  - `supabase.ts` - Supabase client configuration
- `migrations/` - SQL migrations for database setup

## Technologies Used

- Expo & Expo Router
- React Native
- Gluestack UI
- Supabase
- TypeScript

## Give it a shot!

[Try it in your browser](https://kitchen-sink-v2.gluestack.io/) or scan the QR code below <br/><br/>
<img src="https://qr.expo.dev/eas-update?slug=exp&projectId=8d16a046-45ac-43e4-b730-33c7a0d6d1ea&groupId=bfdd42b2-0ee4-4c5b-a97d-e2db7e7c9f8b&host=u.expo.dev" alt="expo-icon" width="200" height="200"/> <br/>
with the Expo Go app on your phone.

## Created By GeekyAnts

GeekyAnts is a team of React Native experts who love open-source and solving developers problems. We've been working on React Native since 2015 and have designed and built React Native apps for almost 200+ clients across the globe. Our clients include startups to big enterprises! Need help with your React Native app?

[Contact Us](https://geekyants.com/?utm_source=gluestack-ui-home&utm_medium=home-page&utm_campaign=meet-the-creators)

## Contributing

We welcome contributions from the community! If you want to report bugs, suggest improvements, or add new features, please create an issue, we will actively look into it.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback join our Discord Channel => https://discord.com/invite/V5SU7HZSAQ
