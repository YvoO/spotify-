# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies
   npm install

2. Start the app
   npx expo start

In the output, you'll find options to open the app in a
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing]

3. The Spotify API is not working so you will be stuck on the sign in screen.

Go to  this file /app/(app)/_layout.tsx and comment out line 16 to see the protected part of the app.

## Yvo's explanations

### Sign up flow
The redirect url is now broken given spotifyjanitor://authorize is seen as an insecure redirect URI. I think this might be fixed by authorizing the user in the back-end
