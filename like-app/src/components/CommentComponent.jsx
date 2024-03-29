import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (commentText) => {
    const newComment = {
      id: comments.length + 1,
      text: commentText,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  const handleReplySubmit = (commentId, replyText) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            { id: comment.replies.length + 1, text: replyText },
          ],
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <ul>
            {comment.replies.map((reply) => (
              <li key={reply.id}>{reply.text}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add a reply"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleReplySubmit(comment.id, e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      ))}
      <input
        type="text"
        placeholder="Add a comment"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleCommentSubmit(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
};

export default CommentSection;
