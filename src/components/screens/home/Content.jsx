import React from "react";
import logoImg from "../../../assets/images/the-witcher.png";
import objectImg from "../../../assets/images/object_near_content.png";

const Content = () => {
  return (
    <div className="mt-28 w-1/2">
      <img
        src={logoImg}
        alt="the Witcher"
        className="mb-10 -ml-12"
        draggable={false}
      />
      <div className="flex ml-5">
        <img
          src={objectImg}
          alt="icons"
          className="mr-8 h-fit block"
          style={{ maxWidth: 90 }}
          draggable={false}
        />
        <p className="text-white opacity-70 leading-8 text-lg" style={{maxWidth: '60%'}}>
          The witcher Geralt, a mutant and monster killer, travels across the
          Continent on his faithful horse named Roach. For a tight bag of minted
          coins, this man will save you from any persistent evil spirits — even
          from swamp monsters, werewolves and even enchanted princesses.
        </p>
      </div>
    </div>
  );
};

export default Content;
