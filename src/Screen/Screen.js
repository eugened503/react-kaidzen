import React from "react";
import "./Screen.css";
import classNames from "classnames";

function Screen() {
  return (
    <>
      <section className="screen">
        <div className="screen-load__item">
          <div
            className={classNames("text-one", {
              we: true,
            })}
          >
            <h3 className="screen-title">we</h3>
          </div>
        </div>

        <div className="screen-load__item-make">
          <div
            className={classNames("text-one", {
              make: true,
            })}
          >
            <h2 className="screen-title">make</h2>
          </div>

          <div
            className={classNames("text-one", {
              love: true,
            })}
          >
            <h2 className="screen-title">love</h2>
          </div>

          <div
            className={classNames("text-one", {
              grow: true,
            })}
          >
            <h2 className="screen-title">grow</h2>
          </div>
        </div>

        <div className="screen-load__item-products">
          <div
            className={classNames("text-one", {
              products: true,
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
