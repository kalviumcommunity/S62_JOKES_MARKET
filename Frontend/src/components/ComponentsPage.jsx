import React from 'react';
import './ComponentPage.css';

const JokeCard = () => {
  const jokeText = "Why don't skeletons fight each other? They don't have the guts!";
  const authorName = "Comedy Central";
  const likeCount = 120;
  const commentCount = 45;

  return (
    <div className="joke-card">
      <h2 className="joke-text">{jokeText}</h2>
      <p className="joke-author">- {authorName}</p>
      <div className="joke-stats">
        <button className="joke-like">👍 {likeCount}</button>
        <button className=" joke-comment ">💬 {commentCount}</button>
      </div>
    </div>
  );
};

export default JokeCard;