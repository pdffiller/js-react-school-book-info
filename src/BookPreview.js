import React from 'react';

const BookPreviewAuthor = ({ author }) => (
  <div className="book-preview--book_author">
    {author}
  </div>
);

const BookPreview = ({ thumbnail, title, authors, year }) => (
  <div className="book-preview">
    {thumbnail && <img src={thumbnail} alt={title} /> }
    <div className="book-preview--book_title">
      {title}
    </div>
    {
      authors && authors.map(
        author => <BookPreviewAuthor key={author} author={author} />
      )
    }
    <div className="book-preview--book_year">
      {year}
      {' '}
      {+year < 2000 ? 'old' : 'new'}
    </div>
  </div>
);

export default BookPreview;
