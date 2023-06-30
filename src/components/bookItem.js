import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{title}</h3>
      <p>
        <strong>Author:</strong>
        {' '}
        {author}
        <br />
      </p>
      <p>{category}</p>
      <button type="button" onClick={() => { dispatch(removeBook(itemId)); }}>Remove</button>
    </div>
  );
};

BookItem.propTypes = {
  itemId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
