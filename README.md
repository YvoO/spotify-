# Spotify Janitor

An assignment for Vytal to show my awesome skills

## Get Started
Install dependencies: npm install

Start the app: npx expo start

In the output, you'll find options to open the app in a:
* Development build
* Android emulator
* iOS simulator
* Expo Go, a limited sandbox for trying out app development with Expo

The Spotify API is not working so you will be stuck on the sign in screen.
Go to this file /app/(app)/_layout.tsx and comment out line 16 to see the protected part of the app.

## Technology Stack

### Expo
For simplified and quick development and deployment

### Expo Router
This project uses Expo Router for navigation which provides several advantages over traditional React Navigation like file-based routing, type safety, deep linking, simplified setup and a better developer experience. 

### Styled Components
I've used styled components for styling, mainly I think it has a better developer experience, is easier to use with animations and is better with dynamic styling. However, Tailwind was a serieus option as well given the fast performance and given it's easier to combine with expo-router.

### React Query
React Query is used for data fetching and state management because. I've started with a local state on the Saved Tracks screen which would have be sufficient for now given I didn't finish the assignemnt, but given the last step is searching a track and add to your saved track I thought it would be better to add a state manager already. And I think React Query is ideal for fetching data and caching it in the state. It provides automatic caching, background updates, error handling & loading states among other great things.

## Still to do

### Sign up flow
The redirect url is now broken given spotifyjanitor://authorize is seen as an insecure redirect URI. I think this might be fixed by authorizing the user with an api call in the back-end instead trying to authorize the user client side.

### Syling
The sign up screen and protected screens aren't aligned at the moment. I started of with Spotify in mind so I created the sign in screen in Spotify brand colors. Later I thought it would be more fun to use Vytal styling, but through lack of time I couldn't fix this anymore. Also, I didn't even add a theme file which is very nice to use with styled components and causes more consistency among components.

### Local storage
I should add local storage as well so I don't spam the API. I think I would have added @react-native-async-storage/async-storage to the queries/spotify/api file to set and get local storage data. 
