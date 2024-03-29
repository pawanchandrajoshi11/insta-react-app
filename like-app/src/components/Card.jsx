import React from "react";
import Comment from "./Comment";
import "./Card.css";

const data = [
  {
    src: "https://plus.unsplash.com/premium_photo-1669829646756-083a328c0abb?q=80&w=918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://media.istockphoto.com/id/950953350/photo/colorful-beach-sunset.jpg?s=1024x1024&w=is&k=20&c=drCPfnIQ-3lWvceDMbdiLvXTIf0eDSlK3LYNTHDj1Ak=",
  },
  {
    src: "https://media.istockphoto.com/id/905420546/photo/spring-meadow-and-blue-sky-over-grass-field-countryside-landscape.jpg?s=1024x1024&w=is&k=20&c=WsW9rIT6EywsCGiAVP3tCOVwLos_sMSyr-QdZiRhwMk=",
  },
  {
    src: "https://media.istockphoto.com/id/1326658718/photo/mountain-in-meteora-greece-rocks-and-summer-sunset-sky.jpg?s=1024x1024&w=is&k=20&c=Dg86zOMIo3it3kXi60XE4nrOzDOSM05jkP0fSngqEWY=",
  },
  {
    src: "https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=1024x1024&w=is&k=20&c=ZZ83CXrsxGd4HhoyV8KXgrdnoaQ9XgeAKkN_ru8taYk=",
  },
];

function Card() {
  return (
    <div className="card">
      {data.map((item) => {
        return (
          <>
            <img src={item.src} alt="img-1" />
            <div className="like-comment">
              <Comment />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Card;
