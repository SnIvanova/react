import React from 'react';

const SingleComment = ({ comment, deleteComment }) => {
  return (
    <div>
      <p>{comment.comment}</p>
      <p>Rating: {comment.rate}</p>
      <button onClick={() => deleteComment(comment._id)}>Delete Comment</button>
    </div>
  );
};

export default SingleComment;
