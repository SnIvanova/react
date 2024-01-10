import React from 'react';
import SingleComment from './SingleComment';

const CommentsList = ({ comments, deleteComment }) => {
  return (
    <div>
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} deleteComment={deleteComment} />
      ))}
    </div>
  );
};

export default CommentsList;
