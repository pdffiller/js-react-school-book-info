export const getBookInfo = ({ id, volumeInfo }) => ({
  ...volumeInfo,
  id,
  year: +volumeInfo.publishedDate.slice(0, 4),
  thumbnail: volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail,
});
