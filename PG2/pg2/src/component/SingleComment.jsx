import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';




const SingleComment = ({ comment, deleteComment, updateComment}) => {
  if (typeof updateComment !== 'function') {
    console.warn('updateComment prop is not a function:', updateComment);
  }
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      deleteComment(comment._id);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log('Updating comment:', comment._id, editedComment);
    updateComment(comment._id, editedComment);
    setIsEditing(false);
  };

  const formatDate = (timestamp) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric'};
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
          <img src="" alt="User Avatar" className="avatar me-2" />
        <Card.Text>
          {isEditing ? (
            <Form.Control
              as="textarea"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
          ) : (
            comment.comment
          )}
        </Card.Text>
        <Card.Text className="text-muted mb-2">
          {`Rating: ${comment.rate} | Posted on ${formatDate(comment.createdAt)}`}
        </Card.Text>
        
          <div className="d-flex align-items-center">
            
              <>
                <Button variant="danger" onClick={handleDelete} className="me-2">
                  <RiDeleteBinLine /> Delete
                </Button>
                <Button variant="primary" onClick={handleEdit} className="me-2">
                  <RiEditLine /> Edit
                </Button>
              </>
            
            
              <Button variant="success" onClick={handleSave} className="me-2">
                Save
              </Button>
           
          </div>
        
      </Card.Body>
    </Card>
  );
};


export default SingleComment;
