export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
  },
];

export const getBookById = (id: number): Book | undefined => {
  return books.find((book) => book.id === id);
};

export const getBooks = (): Book[] => {
  return books;
};
