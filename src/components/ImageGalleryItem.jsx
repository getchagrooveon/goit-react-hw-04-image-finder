import propTypes from 'prop-types';
export const ImageGalleryItem = ({ pictures, onClick }) => {
  return (
    <>
      {pictures.map(element => (
        <li className="imageGalleryItem" key={element.id}>
          <img
            className="imageGalleryItem-image"
            src={element.webformatURL}
            alt={element.tag}
            onClick={() => onClick(element.largeImageURL)}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  pictures: propTypes.array,
  onClick: propTypes.func,
};
