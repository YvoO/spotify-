import * as i from '@/types';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getSavedTracks, addTrack, removeTrack } from './api';

export const useGetSavedTracks = () => {
  const result = useQuery({
    queryKey: ['savedTracks'],
    queryFn: () => getSavedTracks(),
  });

  return result;
};

export const useAddTrack = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (track: i.Track) => await addTrack(track),
    onSuccess: (_, track) => {
      queryClient.setQueryData(['savedTracks'], (oldData: i.Track[]) => {
        return oldData.map((oldTrack: i.Track) => {
          if (oldTrack.id === track.id) {
            return {
              ...oldTrack,
              isDeleted: false
            }
          }
          return oldTrack;
        });
      });
    },
    onError: (error) => {
      console.error('Error adding track', error);
    },
  });
};

export const useDeleteTrack = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => await removeTrack(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(['savedTracks'], (oldData: i.Track[]) => {
        return oldData.map((track: i.Track) => {
          if (track.id === id) {
            return {
              ...track,
              isDeleted: true
            }
          }
          return track;
        });
      });
    },
    onError: (error) => {
      console.error('Error deleting track', error);
    },
  });
};
