import React from "react";

const ActorItem = ({ currentActors }) => {
  return (
    <div className="flex justify-between">
      {currentActors &&
        currentActors.map((e, i) => (
          <div key={`actor_id${i}`}>
            <img
              src={e.imageUrl}
              draggable={false}
              alt="Actors photo"
              style={{ height: "420px", width: "auto" }}
            />
            <p className="mt-5 font-bold text-xl">{e.name}</p>
            <p className="mt-3">{e.role}</p>
          </div>
        ))}
    </div>
  );
};

export default ActorItem;
