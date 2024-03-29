import React, { useState, useEffect } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import Loading from './Loading';
import SingleComment from './SingleComment'; 

const CommentArea = ({ book }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);

  const fetchComments = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDQ4OTMwMTQsImV4cCI6MTcwNjEwMjYxNH0.T-oqN8GZB7Oj0qXMujXX7VTgIgL4Qaeismnwfy3GcTA',
          },
        }
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [book]);

  const deleteComment = async (commentId) => {
    try {
      await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDQ4OTMwMTQsImV4cCI6MTcwNjEwMjYxNH0.T-oqN8GZB7Oj0qXMujXX7VTgIgL4Qaeismnwfy3GcTA',
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
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDQ4OTMwMTQsImV4cCI6MTcwNjEwMjYxNH0.T-oqN8GZB7Oj0qXMujXX7VTgIgL4Qaeismnwfy3GcTA',
        },
        body: JSON.stringify(newComment),
      });
      fetchComments();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const startEditingComment = (commentId) => {
    setEditingCommentId(commentId);
  };

  const cancelEditingComment = () => {
    setEditingCommentId(null);
  };

  const updateComment = async (commentId, updatedComment) => {
    console.log('function from parent:', updateComment);
    try {
      await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDQ4OTMwMTQsImV4cCI6MTcwNjEwMjYxNH0.T-oqN8GZB7Oj0qXMujXX7VTgIgL4Qaeismnwfy3GcTA',
        },
        body: JSON.stringify({ comment: updatedComment }),
      });
      fetchComments();
      setEditingCommentId(null);
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CommentsList
            comments={comments}
            deleteComment={deleteComment}
            startEditingComment={startEditingComment}
          />
          {editingCommentId ? (
            <SingleComment
              comment={comments.find((comment) => comment._id === editingCommentId)}
              deleteComment={deleteComment}
              updateComment={updateComment}
            />
          ) : (
            <AddComment addComment={addComment} book={book} />
          )}
        </>
      )}
    </div>
  );
};

export default CommentArea;
