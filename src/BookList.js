import React from 'react';
import BookPreview from './BookPreview';

import bookJson from './book.json';
import bookJson2 from './book-2.json';
import bookJson3 from './book-3.json';
import { getBookInfo } from './mappers';

const books = [
  getBookInfo(bookJson),
  getBookInfo(bookJson2),
  getBookInfo(bookJson3),
];

const BookList = () => books.map(
  book => ( 
    <BookPreview 
      key={book.id}
      thumbnail={book.thumbnail}
      title={book.title}
      authors={book.authors}
      year={book.year}
    />
  )
);

export default BookList;
