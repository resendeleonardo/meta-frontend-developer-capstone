import React from "react";

type ReviewCardProps = {
  rating: string;
  userPhoto: string;
  userName: string;
  review: string;
};

const ReviewCard = ({
  rating,
  userPhoto,
  userName,
  review,
}: ReviewCardProps) => {
  return (
    <>
      <div className="bg-white py-6 px-4 text-black rounded-lg">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl text-yellow-400">{rating}</h3>
          <div className="flex flex-row gap-4 items-center">
            <img src={userPhoto} alt="user Photo" className="h-20 w-24" />
            <p className="font-semibold">{userName}</p>
          </div>
          <p className="text-base">{review}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
