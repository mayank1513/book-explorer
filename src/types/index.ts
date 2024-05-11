export interface BookInterface {
  title: string;
  authors?: string[];
  coverImage?: string;
  description?: string;
  publisher?: string;
}

export interface APIDataInterface {
  totalItems: number;
  items: {
    volumeInfo: {
      title: string;
      authors?: string[];
      imageLinks?: { thumbnail: string };
      description?: string;
      publisher?: string;
    };
  }[];
}

export type FilterType = "intitle" | "inauthor" | "inpublisher";
// | "isbn"
// | "lccn"
// | "oclc";
