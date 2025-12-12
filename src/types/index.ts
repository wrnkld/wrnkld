export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  yearRead: number;
  recommended: boolean;
}

export interface Record {
  id: number;
  year: number;
  artist: string;
  album: string;
}
