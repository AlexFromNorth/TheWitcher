import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Layout from "../layout/Layout";
import { list } from "./list";
import { Pagination } from "./Pagination";
import ActorItem from "./ActorItem";

export const Actors = () => {
  const [actors, setActors] = useState(list);
  const [currentPage, setCurrentPage] = useState(1);
  const [actorsPerPage] = useState(3);
  // const [btnLeft, setBtnLeft] = useState(true)
  // const [btnLeft, setBtnLeft] = useState(false)
  console.log("ttt");

  const lastActorsIndex = currentPage * actorsPerPage;
  const firstActorsIndex = lastActorsIndex - actorsPerPage;
  const currentActors = actors.slice(firstActorsIndex, lastActorsIndex);

  let hasPrevPage = firstActorsIndex > 0 ? true : false;
  let hasNextPage = lastActorsIndex < actors.length ? true : false;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    hasNextPage = lastActorsIndex < actors.length ? true : false;
    if(hasNextPage)setCurrentPage((prev) => prev + 1);
    
  };
  const prevPage = () => {
    hasPrevPage = firstActorsIndex > 0 ? true : false;
    if(hasPrevPage)setCurrentPage((prev) => prev - 1);
  };

  return (
    <Layout>
      <div className="max-w-6xl text-center mx-auto mt-16 text-white">
        <ActorItem currentActors={currentActors} />
        <Pagination
          actorsPerPage={actorsPerPage}
          totalCountries={actors.length}
          paginate={paginate}
        />
        {(hasPrevPage || hasNextPage) && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/4">
            <button
              className={`${hasPrevPage ? "text-white" : "text-gray-500"} mr-4`} 
              onClick={prevPage}
            >
              Prev page
            </button>
            <button
              className={`${hasNextPage ? "text-white" : "text-gray-500"} mr-7`} 
              onClick={nextPage}
            >
              Next page
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};
