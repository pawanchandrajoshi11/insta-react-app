import React, { useState } from "react";

function CommentInput({ handleCommentSubmit }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommentSubmit(comment);
    setComment('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentInput;
