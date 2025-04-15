import * as React from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

import { useStorageState } from './useStorageState';

interface Session {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}

const AuthContext = React.createContext<{
  signIn: () => Promise<void>;
  signOut: () => void;
  session?: Session | null;
  isLoading: boolean;
}>({
  signIn: async () => {},
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  const [,, promptAsync] = useAuthRequest(
    {
      clientId: process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID || '',
      scopes: [
        'user-read-email',
        'user-read-private',
        'playlist-read-private',
        'playlist-modify-public',
        'playlist-modify-private',
      ],
      usePKCE: false,
      redirectUri: makeRedirectUri({
        scheme: 'spotifyjanitor',
        path: 'authorize'
      }),
    },
    {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
    }
  );
  
  const signIn = async () => {
    try {
      const response = await promptAsync();
      if (response?.type === 'success') {
        const { access_token, token_type, expires_in } = response.params;

        const sessionData: Session = {
          accessToken: access_token,
          tokenType: token_type,
          expiresIn: parseInt(expires_in),
        };
        setSession(JSON.stringify(sessionData));
      }
    } catch (error) {
      console.error('Failed to sign in with Spotify:', error);
      throw error;
    }
  };

  const signOut = () => {
    setSession(null);
  };

  const value = React.useMemo(
    () => ({
      signIn,
      signOut,
      session: session ? JSON.parse(session) : null,
      isLoading,
    }),
    [session, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
