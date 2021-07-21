import React from "react";
import "./ReactTyping.css";
import ReactTypingEffect from "react-typing-effect";

const ReactTyping = ({ text, styleTitle, styleSubtitle }) => {
  return (
    <ReactTypingEffect
      typingDelay={100}
      eraseDelay={500}
      eraseSpeed={100}
      className="typing"
      text={text}
      cursorRenderer={(cursor) => <p className={styleSubtitle}>{cursor}</p>}
      displayTextRenderer={(text, i) => {
        return (
          <p className={styleTitle}>
            {text.split("").map((char, i) => {
              const key = `${i}`;
              return <span key={key}>{char}</span>;
            })}
          </p>
        );
      }}
    />
  );
};

export default ReactTyping;
