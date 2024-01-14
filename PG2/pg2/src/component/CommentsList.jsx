import React from 'react';
import SingleComment from './SingleComment';

const CommentsList = ({ comments, deleteComment,  updateComment}) => {
  return (
    <div>
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} deleteComment={deleteComment}  updateComment={updateComment}/>
      ))}
    </div>
  );
};

export default CommentsList;
