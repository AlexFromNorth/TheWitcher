import React, { useEffect, useState } from "react";

export const Pagination = ({ actorsPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalCountries / actorsPerPage) + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    // <div className="flex justify-center absolute bottom-10 left-1/2 translate-x-1/4">
    <div className="flex justify-center absolute bottom-10 left-1/2 -translate-x-1/4">
      {pageNumbers.map((number) => (
        <button
          className="px-3 py-1 mx-1 border hover-text-red"
          key={`pageItem-${number}`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};
