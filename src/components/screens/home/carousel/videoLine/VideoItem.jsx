import React from "react";
import PropTypes from "prop-types";
import PlayButton from "./PlayButton";

const VideoItem = ({ slide, isActive, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={`block relative mr-8 transition-all duration-300 ease-in-out ${
        isActive ? "w-52 h-full" : "w-40 h-24"
      }`}
    >
      {isActive && <PlayButton />}
      <div
        className={`bg-cover bg-no-repeat bg-center h-full ${
          isActive ? "filter grayscale" : ""
        }`}
        style={{ backgroundImage: `url(${slide.thumbnailPath})` }}
      ></div>
    </button>
  );
};

VideoItem.propTypes = {
  slide: PropTypes.objectOf({
    _id: PropTypes.string.isRequired,
    thumbnailPath: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
  }),
  isActive: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default VideoItem;
