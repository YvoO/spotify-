import * as i from '@/types';
import * as React from 'react';
import { ActivityIndicator, FlatList, Pressable } from 'react-native';

import { HorizontalScroll } from '@/components/animations';
import { useAddTrack, useDeleteTrack, useGetSavedTracks } from '@/queries/spotify';

import {
  Container, TrackItem, TrackAlbumArt, TrackInfo, TrackName, TrackArtistName,
  DeletedContainer, DeleteButtonText, DeleteText, SearchInput
} from './styled';

export default function SavedTracks() {
  const savedTracks = useGetSavedTracks();
  const addTrack = useAddTrack();
  const deleteTrack = useDeleteTrack();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleUndo = React.useCallback((track: i.Track) => {
    addTrack.mutate(track);
  }, [addTrack]);

  const filteredTracks = React.useMemo(() => {
    if (!savedTracks.data) return [];
    
    return savedTracks.data.filter((track) => {
      const searchLower = searchQuery.toLowerCase();

      return (
        track.name.toLowerCase().includes(searchLower) ||
        track.artists.some((artist) => artist.name.toLowerCase().includes(searchLower)) ||
        track.album.name.toLowerCase().includes(searchLower)
      );
    });
  }, [savedTracks.data, searchQuery]);

  const renderItem = ({ item }: { item: i.Track }) => {
    if (item.isDeleted) {
      return (
        <DeletedContainer>
          <DeleteText>You removed this track from your library</DeleteText>
          <Pressable onPress={() => handleUndo(item)}>
            <DeleteButtonText>Undo</DeleteButtonText>
          </Pressable>
        </DeletedContainer>
      )
    }
    return (
      <HorizontalScroll id={item.id} onDelete={deleteTrack.mutate}>
        <TrackItem>
          <TrackAlbumArt source={{ uri: item.album.images[0]?.url }} />
          <TrackInfo>
            <TrackName>{item.name}</TrackName>
            <TrackArtistName>
              {item.artists.map(artist => artist.name).join(', ')}
            </TrackArtistName>
          </TrackInfo>
        </TrackItem>
      </HorizontalScroll>
    )
  };

  if (savedTracks.isLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }

  return (
    <Container>
      <SearchInput
        placeholder="Search tracks..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredTracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
