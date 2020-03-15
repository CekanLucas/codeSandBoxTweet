import React from "react";
import ReactDOM from "react-dom";

import tweets from "./tweets.json";

import "./styles.css";

const tweet = tweets[0];

function Tweet(props) {
  return (
    <article className="tweet">
      <header className="tweet__header">
        <img 
          className="tweet__header-avatar" 
          src={ props.avatar } 
          alt='User Avatar'
        />
        <h2 className="tweet__header-name">{ props.name }</h2>
      </header>
      <main className="tweet__content">
        <p>{ props.content }</p>
      </main>
      <footer className="tweet__footer">{ props.date }</footer>
    </article>
  );
}

ReactDOM.render(
  <><Tweet
    name={tweet.name}
    avatar={tweet.avatar}
    content={tweet.content}
    date={tweet.date}
  />
  <Tweet
  name={tweet.name}
  avatar={tweet.avatar}
  content={tweet.content}
  date={tweet.date}
/></>,
  document.getElementById("root")
);