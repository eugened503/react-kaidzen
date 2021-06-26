import React from "react";
function FalseButtons({ pof2, pof4, xTrailing, yTrailing }) {

  return (
    <>
      <button
        className={pof2}
        style={{
          left: xTrailing,
          top: yTrailing,
        }}
      />

      <button
        className={pof4}
        style={{
          left: xTrailing,
          top: yTrailing,
        }}
      />
    </>
  );
}

export default FalseButtons;
