export interface BookInterface {
  title: string;
  authors?: string[];
  coverImage?: string;
  description?: string;
}

export interface APIDataInterface {
  totalItems: number;
  items: {
    volumeInfo: {
      title: string;
      authors?: string[];
      imageLinks?: { thumbnail: string };
      description: string;
    };
  }[];
}
