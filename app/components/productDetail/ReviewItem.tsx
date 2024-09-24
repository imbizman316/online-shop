import React from "react";
import { FaStar } from "react-icons/fa";

function ReviewItem({ review }) {
  const date = new Date(review.date);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  return (
    <div className="flex w-full gap-7 h-[200px]">
      <div
        className="rounded-full bg-gray-500 border border-black"
        style={{
          backgroundImage:
            "url(https://ih1.redbubble.net/image.5264331359.9554/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg)",
          width: "100px",
          height: "100px",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="w-full flex flex-col gap-4">
        <div className="text-2xl font-bold uppercase text-[#1a2456]">
          {review.reviewerName}
        </div>
        <div className="flex justify-between">
          {/* review.rating */}
          <div className="flex flex-row">
            {Array.from({ length: review.rating }, (_, index) => (
              <FaStar
                key={index}
                size={23}
                // color="blue"
                className="text-yellow-800"
                fill="#1a2456"
              />
            ))}
          </div>
          <div className="text-sm">
            {year} {month} {day}
          </div>
        </div>
        <div className="text-lg font-semibold">{review.comment}</div>
      </div>
    </div>
  );
}

export default ReviewItem;
