import * as SecureStore from 'expo-secure-store';

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const accessToken = await SecureStore.getItemAsync('accessToken');

  if (accessToken) {
    throw new Error('No access token available');
  }

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
};
