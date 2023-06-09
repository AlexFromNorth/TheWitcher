import React, { useState } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

import PropTypes from "prop-types";

const stylesButton = "duration-300 ease-in-out transition-opacity";
const disabledButtonStyle = "opacity-30 cursor-not-allowed";
const activeButtonStyle = "opacity-90 hover:opacity-90";

const Controls = ({ slidesLength, setCurrentIdx, currentIdx }) => {
  const isPrevDisabled = currentIdx === 0;
  const isNextDisabled = currentIdx + 1 === slidesLength;

  const prevHandler = () => {
    !isPrevDisabled && setCurrentIdx((prev) => prev - 1);
  };
  const nextHandler = () => {
    !isNextDisabled && setCurrentIdx((next) => next + 1);
  };

  return (
    <div className="text-white">
      <button
        onClick={prevHandler}
        className={`${stylesButton} ${
          isPrevDisabled ? disabledButtonStyle : activeButtonStyle
        } `}
      >
        <HiChevronLeft size={26} />
      </button>
      <button
        onClick={nextHandler}
        className={`${stylesButton} ${
          isNextDisabled ? disabledButtonStyle : activeButtonStyle
        } `}
      >
        <HiChevronRight size={26} />
      </button>
    </div>
  );
};

Controls.propTypes = {
  slidesLength: PropTypes.number.isRequired,
  setCurrentIdx: PropTypes.func.isRequired,
  currentIdx: PropTypes.number.isRequired,
};

export default Controls;
