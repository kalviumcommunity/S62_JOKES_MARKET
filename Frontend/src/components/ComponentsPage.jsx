import React, { useEffect, useState } from 'react';
import './ComponentPage.css';
// import { response } from '../../../Backend/src/server';

const JokeCard = () => {
  const [data,setData]=useState({})
  useEffect(()=>{
    fetch("http://localhost:8000/users/get-users")
    .then((response)=>{
      // console.log("Raw Response:", response)
      // console.log("Raw Response:", response.headers.get("content-type"))
      return response.json()
     })
    .then((data)=>{
      console.log("Parsed Data:", data.username)
      if (data){
        setData(data)
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  const jokeText = "Why don't skeletons fight each other? They don't have the guts!";
  // const authorName = ;
  const likeCount = 120;
  const commentCount = 45;
  console.log(data)
  return (
    <div className="joke-card">
      <h2 className="joke-text">{jokeText}</h2>
      <p className="joke-author">-{data.username}</p>
      <div className="joke-stats">
        <button className="joke-like">👍 {likeCount}</button>
        <button className=" joke-comment ">💬 {commentCount}</button>
      </div>
    </div>
  );
};

export default JokeCard;