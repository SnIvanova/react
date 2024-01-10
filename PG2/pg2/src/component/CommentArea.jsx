import React, { useState, useEffect } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

const CommentArea = ({ book }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [book]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDQ4OTMwMTQsImV4cCI6MTcwNjEwMjYxNH0.T-oqN8GZB7Oj0qXMujXX7VTgIgL4Qaeismnwfy3GcTA'
          },
        }
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDQ4OTMwMTQsImV4cCI6MTcwNjEwMjYxNH0.T-oqN8GZB7Oj0qXMujXX7VTgIgL4Qaeismnwfy3GcTA'
        },
      });
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const addComment = async (newComment) => {
    try {
      await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDQ4OTMwMTQsImV4cCI6MTcwNjEwMjYxNH0.T-oqN8GZB7Oj0qXMujXX7VTgIgL4Qaeismnwfy3GcTA'
        },
        body: JSON.stringify(newComment),
      });
      fetchComments();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <CommentsList comments={comments} deleteComment={deleteComment} />
    <div>
       <AddComment addComment={addComment} book={book} /> 
    </div>
      
    </div>
  );
};

export default CommentArea;
