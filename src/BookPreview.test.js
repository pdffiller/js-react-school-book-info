import React from 'react';
import renderer from 'react-test-renderer';
import BookPreview from './BookPreview';
import bookJSON from './book.json';
import { getBookInfo } from './mappers';


describe('BookPreview', () => {
  it('should be rendered without errors without props', () => {
    const html = renderer.create(<BookPreview />).toJSON();
    expect(html).toMatchSnapshot();
  });

  it('should be rendered without errors with a valid book info', () => {
    const book = getBookInfo(bookJSON);
    const html = renderer.create(
      <BookPreview {...book} />
    ).toJSON();
    expect(html).toMatchSnapshot();
  });

  it('should be rendered without errors with a old book info', () => {
    const book = getBookInfo(
      require('./book-3.json')
    );
    const html = renderer.create(
      <BookPreview {...book} />
    ).toJSON();
    expect(html).toMatchSnapshot();
  });
});