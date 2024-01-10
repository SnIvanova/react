import React, { useState } from 'react';

const AddComment = ({ addComment, book }) => {
  const [newComment, setNewComment] = useState({
    comment: '',
    rate: '',
    elementId: book.asin,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(newComment);
    setNewComment({ comment: '', rate: '', elementId: book.asin });
  };

  return (
    <div>
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <input
            type="text"
            value={newComment.comment}
            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
          />
        </label>
        <br />
        <label>
          Rate:
          <input
            type="number"
            value={newComment.rate}
            onChange={(e) => setNewComment({ ...newComment, rate: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddComment;
