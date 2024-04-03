import React, { useState } from "react";
import CommentInput from "./CommentInput";
import CommentComponent from "./CommentComponent";

function Comment() {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);// one like only
  const [comments, setComments] = useState([]); // not used

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleClick = () => {
    if (!isLiked) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentBox = () => {
    const commentBox = document.getElementById("commentBox");
    commentBox.style.display = "block";
  };
  return (
    <>
    <h2>
        <i
          onClick={handleClick}
          className="fa fa-thumbs-up"
          style={{ fontSize: "20px", padding: "10px" }}
        ></i>
        {like}
    </h2>
    <CommentComponent/>
      {/* <h1>
        <i
          onClick={handleClick}
          className="fa fa-thumbs-up"
          style={{ fontSize: "40px" }}
        ></i>
        {like}
      </h1>
      <button
        onClick={handleCommentBox}
        style={{
          marginRight: "20px",
          paddingLeft: "50px",
          paddingRight: "50px",
          fontSize: "15px",
        }}
      >
        Comment
      </button>
      <div id="commentBox" style={{ display: "none" }}>
        <CommentInput handleCommentSubmit={handleCommentSubmit} />
        {comments.map((comment, index) => {
          return <div key={index}>{comment}</div>;
        })}
      </div> */}
    </>
  );
}

export default Comment;

// import React, { useState } from "react";
// import CommentInput from "./CommentInput";

// function Comment() {
//   const [like, setLike] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [comments, setComments] = useState([]);

//   const handleCommentSubmit = (newComment) => {
//     setComments([...comments, newComment]);
//   };

//   const handleClick = () => {
//     if (!isLiked) {
//       setLike(like + 1);
//     } else {
//       setLike(like - 1);
//     }
//     setIsLiked(!isLiked);
//   };

//   const handleCommentBox = (index) => {
//     const commentBox = document.getElementById(`commentBox${index}`);
//     commentBox.style.display = "block";
//   };
//   return (
//     <>
//       <h1>
//         <i
//           onClick={handleClick}
//           className="fa fa-thumbs-up"
//           style={{ fontSize: "40px" }}
//         ></i>
//         {like}
//       </h1>
//       {comments.map((comment, index) => {
//         <>
//           <button
//             onClick={handleCommentBox(index)}
//             // style={{
//             //   marginRight: "20px",
//             //   paddingLeft: "50px",
//             //   paddingRight: "50px",
//             //   fontSize: "15px",
//             //   display: "block",
//             // }}
//           >
//             Comment
//           </button>
//           <div id={`commentBox${index}`} style={{ display: "none" }}>
//             <CommentInput handleCommentSubmit={handleCommentSubmit} />
//             <div>{comment}</div>;
//           </div>
//         </>;
//       })}
//     </>
//   );
// }

// export default Comment;
