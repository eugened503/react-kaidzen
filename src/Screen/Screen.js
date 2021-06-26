import React from "react";
import "./Screen.css";
import classNames from "classnames";

function Screen() {
  return (
    <>
      <section className="screen">
        <div className="screen-load__item">
          <div
            className={classNames("text-one2", {
              visible2: true,
            })}
          >
            <h3 className="screen-title">we</h3>
          </div>
        </div>

        <div className="screen-load__item2">
          <div
            className={classNames("text-one2", {
              visible33: true,
            })}
          >
            <h2 className="screen-title">make</h2>
          </div>

          <div
            className={classNames("text-one2", {
              visible44: true,
            })}
          >
            <h2 className="screen-title">love</h2>
          </div>

          <div
            className={classNames("text-one2", {
              visible55: true,
            })}
          >
            <h2 className="screen-title">grow</h2>
          </div>
        </div>

        <div className="screen-load__item3">
          <div
            className={classNames("text-one2", {
              visible4: true,
            })}
          >
            <h2 className="screen-title">products</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Screen;
