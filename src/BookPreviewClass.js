import React from 'react';

const BookPreviewAuthor = ({ author }) => (
  <div className="book-preview--book_author">
    {author}
  </div>
);

class BookPreview extends React.Component {
  render() {
    const { thumbnail, title, authors, year } = this.props;
    
    return (
      <div className="book-preview">
        <img src={thumbnail} alt={title} />
        <div className="book-preview--book_title">
          {title}
        </div>
        {
          authors.map(
            author => <BookPreviewAuthor key={author} author={author} />
          )
        }
        <div className="book-preview--book_year">
          {year}
        </div>
      </div>
    );
  }
}

export default BookPreview;
