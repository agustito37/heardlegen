import { Song } from './songs';

export interface HeardleConfig {
  id: string;
  title: string;
  subtitle: string;
  songs: Song[];
  audioFolder: string;
}

// Import all song files
import { songs as roSongs } from './ro_songs';
import { songs as dsiSongs } from './dsi_songs';

export const heardles: HeardleConfig[] = [
  {
    id: 'ro',
    title: 'Ragnarok Heardle',
    subtitle: 'By Lazerth',
    songs: roSongs,
    audioFolder: '/BGM2/'
  },
  {
    id: 'dsi',
    title: 'Dark Souls Heardle',
    subtitle: 'By Drumsetto',
    songs: dsiSongs,
    audioFolder: '/DSI2/'
  }
]; 