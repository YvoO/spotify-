import * as React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useSession } from "./ctx";
import { Container, Title, Subtitle, Button, ButtonText } from './styled';

export default function SignIn() {
  const { signIn, isLoading } = useSession();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <Container>
      <Title>Welcome to Spotify Janitor</Title>
      <Subtitle>Manage your Spotify playlists with ease</Subtitle>
      
      <Button
        onPress={handleSignIn}
        disabled={isLoading}
      >
        <MaterialCommunityIcons name="spotify" size={24} color="white" />
        <ButtonText>
          {isLoading ? 'Signing in...' : 'Sign in with Spotify'}
        </ButtonText>
      </Button>
    </Container>
  );
}
