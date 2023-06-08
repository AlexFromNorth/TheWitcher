import React from "react";
import Layout from "../layout/Layout";

const Games = () => {
  return (
    <Layout>
      <div className="max-w-6xl text-center mx-auto">
        <img
          className="mt-16"
          src="https://sun9-52.userapi.com/c857532/v857532755/7cde5/szCIJgVVdS8.jpg"
          alt="The Witcher 3"
          draggable={false}
        />
        <p className="text-white my-10">
          You are Geralt of Rivia, mercenary monster slayer. Before you stands a
          war-torn, monster-infested continent you can explore at will. Your
          current contract? Tracking down Ciri — the Child of Prophecy, a living
          weapon that can alter the shape of the world. The Complete Edition
          contains the base game, offering a huge, over 100-hour long,
          open-world adventure, as well as both of its massive story expansions:
          Hearts of Stone & Blood and Wine worth an extra 50 hours of gameplay!
          It also comes with all additional content released for the game,
          alongside new features and items, including a built-in Photo Mode,
          swords, armor, and alternate outfits inspired by The Witcher Netflix
          series — and more!
        </p>
        <a
          href="https://buy.thewitcher.com/ru_ru/"
          className="inline-block"
          target="_blank"
        >
          <input
            type="submit"
            value="Buy"
            className="hover-text-white block border-none py-2 px-4 outline-none mx-auto cursor-pointer bg-pink-800"
            style={{ minWidth: 140 }}
          />
        </a>
      </div>
    </Layout>
  );
};

export default Games;
