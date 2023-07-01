import { useSelector } from 'react-redux';
import BookItem from './bookItem';
import AddBook from './Create';

const BooksContainer = () => {
  const books = useSelector((store) => store.books);

  return (
    <section className="mainSection">
      {books.map((item) => (
        <BookItem
          key={item.itemId}
          itemId={item.itemId}
          title={item.title}
          author={item.author}
          category={item.category}
        />
      ))}
      <AddBook />
    </section>
  );
};

export default BooksContainer;
