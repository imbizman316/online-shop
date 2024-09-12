import React from "react";
import ReviewItem from "./ReviewItem";

function ReviewContainer({ reviews }) {
  return (
    <div className="w-full pt-10">
      <div className="flex justify-between">
        <h1>REVIEWS {reviews.length}</h1>
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
