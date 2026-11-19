export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  recommended: boolean;
  note?: string;
}

export interface Record {
  id: number;
  year: number;
  artist: string;
  album: string;
}
