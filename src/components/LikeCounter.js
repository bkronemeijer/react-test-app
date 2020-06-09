import React, { useState, useEffect } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  
  const initialButtonText = "Like this"
  const [buttonText, setButtonText] = useState(initialButtonText)
  
  // const increment = () => {
  //   console.log("Yes, clicked! Current number of likes:", numLikes);
  //   set_numLikes(numLikes + 1);
  // };

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);
  
  const clickLikeButton = () => {
    const newButtonText = buttonText === initialButtonText ? "You've liked this. Click to unlike" : initialButtonText
    setButtonText(newButtonText)
  }

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={() => set_numLikes(numLikes + 1)}>Like</button>
        <button onClick={() => set_numLikes(initial_numLikes)}>Reset</button>
        <button onClick={clickLikeButton}>{buttonText}</button>
      </p>
    </div>
  );
}