import React from "react";

function ReviewItem({ review }) {
  return (
    <div className="flex w-full gap-7">
      <div
        className="rounded-full bg-gray-500 border border-black"
        style={{
          backgroundImage:
            "url(https://ih1.redbubble.net/image.5264331359.9554/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg)",
          width: "80px",
          height: "auto",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="w-full">
        <div>{review.reviewerName}</div>
        <div className="flex justify-between">
          <div>{review.rating}</div>
          <div>{review.date}</div>
        </div>
        <div>{review.comment}</div>
      </div>
    </div>
  );
}

export default ReviewItem;
