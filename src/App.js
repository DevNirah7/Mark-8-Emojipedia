import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Happy",
  "😍": "Heart Eyes",
  "😔": "Sad",
  "😳": "Disbelief",
  "❤️": "Love",
  "🤣": "Rolling on the Floor Laughing",
  "😮‍💨": "Face Exhaling",
  "🥵": "Hot Face",
  "🤢": "Disgust",
  "✨": "Sparkles",
  "🔥": "Fire",
  "🤑": "Rich",
  "🤐": "No comments",
  "😎": "Smart",
  "🧐": "Oh really",
  "😰": "Anxious"
};

var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  var [x, setX] = useState("");

  function changeHandler(event) {
    var a = event.target.value;
    var x = emojiDictionary[a];
    if (x === undefined) {
      x = "Sorry, we do not have this in our database";
    }
    setX(x);
  }

  function emojiClickHandler(emoji) {
    var x = emojiDictionary[emoji];
    setX(x);
  }
  return (
    <div className="App">
      <h1 id="title"> EMOJIPEDIA </h1>
      <input
        id="input"
        placeholder="Enter an emoji here"
        onChange={changeHandler}
      ></input>
      <h2 id="display"> {x}</h2>
      <h3 id="text"> OR choose any of these emojis 👇 </h3>
      <div class="box">
        {emojisWeknow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "1rem 0.5rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
