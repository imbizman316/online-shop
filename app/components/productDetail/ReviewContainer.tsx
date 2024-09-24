import React from "react";
import ReviewItem from "./ReviewItem";

function ReviewContainer({ reviews }) {
  return (
    <div className="w-full pt-10">
      <div className="flex justify-between border-b-2 border-black pb-3 mb-5">
        <div className="flex gap-3">
          <h1 className="text-xl font-bold">REVIEWS </h1>
          <h1 className="text-lg font-semibold bg-pink-200 px-5 rounded-xl">
            {reviews.length}
          </h1>
        </div>
        <button className="bg-[#1a2456] rounded-3xl text-white px-5 py-2 text-sm">
          WRITE A REVIEW
        </button>
      </div>
      <div className="flex flex-col gap-7">
        {reviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </div>
    </div>
  );
}

export default ReviewContainer;
