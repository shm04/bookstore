import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import circle from '../assets/circle.png';

const BookItem = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="bookDiv">
      <div className="booknameDiv">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
        <p className="author">{author}</p>
        <div className="btnsDiv">
          <button type="button">Comment</button>
          <button type="button" onClick={() => dispatch(removeBook(itemId))}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="percenDiv">
        <img alt="circle" src={circle} />
        <div>
          <p className="percentage">64%</p>
          <p className="status">Completed</p>
        </div>
      </div>
      <div className="chapterDiv">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button className="progressBtn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
