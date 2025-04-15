
import { Text,TouchableOpacity } from 'react-native';
import { useSession } from '../ctx';
import { Container } from './styled';

export default function Profile() {
  const { signOut } = useSession();

  return (
    <Container>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </Container>
  );
}
