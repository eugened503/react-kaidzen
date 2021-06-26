import React from 'react';
import "./ReactTypingEffectDemo.css";
import ReactTypingEffect from 'react-typing-effect';

const ReactTypingEffectDemo = () => {
  return (

      <ReactTypingEffect
      className="typing"
        text={["PROSTAFF", "Britannica project", "WonderTask"]}
        cursorRenderer={cursor => <p className="form-container__subtitle" >{cursor}</p>}
        displayTextRenderer={(text, i) => {
          return (
            <p className="form-container__type">
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{color:'white'}}
                  >{char}</span>
                );
              })}
            </p>
          );
        }}        
      />
 
  );
};

export default ReactTypingEffectDemo;
