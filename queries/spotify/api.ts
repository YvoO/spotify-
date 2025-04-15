import * as i from '@/types';
import { fetchWithAuth } from '@/services/api';

import { MOCK_TRACKS } from './mock_data';

export const getSavedTracks = async (): Promise<i.Track[]> => {
  try {
    const response = await fetchWithAuth('https://api.spotify.com/v1/me/tracks?limit=50');

    if (!response.ok) {
      throw new Error('Failed to fetch saved tracks');
    }

    const data = await response.json();
    return data.items.map(({ track }: { track: i.Track }) => track);
  } catch (error) {
    console.error('Error fetching from Spotify API:', error);
    // Just return MOCK_TRACKS for now so we can see something in the list
    return MOCK_TRACKS;

    throw error; // Re-throw the error to be caught by the mutation
  }
};

export const addTrack = async (track: i.Track) => {
  try {
    const response = await fetchWithAuth(`https://api.spotify.com/v1/me/tracks`, {
      method: 'PUT',
      body: JSON.stringify({
        ids: [track.id],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add track');
    }

    return;
  } catch (error) {
    // Just return for now so the track gets removed from the list
    return;

    throw error; // Re-throw the error to be caught by the mutation
  }
};

export const removeTrack = async (id: string) => {
  try {
    const response = await fetchWithAuth(`https://api.spotify.com/v1/me/tracks`, {
      method: 'DELETE',
      body: JSON.stringify({
        ids: [id],
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to remove track: ${response.status} ${response.statusText}`);
    }

    return;
  } catch (error) {
    // Just return for now so the track gets removed from the list
    return;
    
    throw error; // Re-throw the error to be caught by the mutation
  }  
};
