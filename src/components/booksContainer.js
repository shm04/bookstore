import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from './bookItem';
import AddBook from './Create';

const BooksContainer = () => {
  // const dispatch = useDispatch();
  const { BookItem } = useSelector((store) => store.books);

  return (
    <section>
      {BookItem.map((item) => <BookItem key={item.id} {...item} />)}
      <AddBook />
    </section>
  );
};

export default BooksContainer;
