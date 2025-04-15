import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
`;

export const TrackItem = styled.View`
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const TrackAlbumArt = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

export const TrackInfo = styled.View`
  margin-left: 10px;
  flex: 1;
  justify-content: center;
`;

export const TrackName = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const TrackArtistName = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const DeletedContainer = styled.View`
  padding: 15px;
  background-color: #f8f8f8;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const DeleteButtonText = styled.Text`
  color: #50c9c3;
  font-weight: 600;
  margin-top: 10px;
`;

export const DeleteText = styled.Text`
  color: #666;
`;

export const SearchInput = styled.TextInput`
  padding: 10px 15px;
  margin: 10px;
  border-radius: 8px;
  background-color: #f0f0f0;
  font-size: 16px;
`;
