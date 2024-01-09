import React from 'react';
import BookList from './BookList';

const AllBooks = ({ category, books }) => {
  return (
    <div>
      <h2 className='text-center my-3'>{category}</h2>
      <BookList books={books} />
    </div>
  );
};

export default AllBooks;