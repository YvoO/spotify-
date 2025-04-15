import * as i from '@/types';

// Mock data that matches the Track interface
export const MOCK_TRACKS: i.Track[] = [
  {
    id: '1abc123',
    name: 'Bohemian Rhapsody',
    artists: [{ name: 'Queen' }],
    album: {
      name: 'A Night at the Opera',
      images: [{ url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png' }]
    }
  },
  {
    id: '2def456',
    name: 'Billie Jean',
    artists: [{ name: 'Michael Jackson' }],
    album: {
      name: 'Thriller',
      images: [{ url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png' }]
    }
  },
  {
    id: '3ghi789',
    name: 'Comfortably Numb',
    artists: [{ name: 'Pink Floyd' }],
    album: {
      name: 'The Dark Side of the Moon',
      images: [{ url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png' }]
    }
  },
  {
    id: '4jkl012',
    name: 'Bad Guy',
    artists: [{ name: 'Billie Eilish' }],
    album: {
      name: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',
      images: [{ url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png' }]
    }
  },
  {
    id: '5mno345',
    name: 'Uptown Funk',
    artists: [{ name: 'Mark Ronson' }, { name: 'Bruno Mars' }],
    album: {
      name: 'Uptown Special',
      images: [{ url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png' }]
    }
  }
];
