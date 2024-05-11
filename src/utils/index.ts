import { APIDataInterface, BookInterface } from "../types";

export function apiDataToBooks(data: APIDataInterface): BookInterface[] {
  return data.items.map((item) => ({
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    coverImage: item.volumeInfo.imageLinks?.thumbnail,
    description: item.volumeInfo.description,
    publisher: item.volumeInfo.publisher,
  }));
}
