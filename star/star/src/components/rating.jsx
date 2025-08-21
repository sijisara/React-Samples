import { useState } from "react";

function StarButton({ rating, setRating }) {
  return (
    <div className="flex gap-2 cursor-pointer text-2xl justify-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          className={star <= rating ? "text-yellow-500" : "text-gray-400"}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}
function RatingDisplay({ rating }) {
  return (
    <p>
      {rating > 0
        ? `You rated: ${rating} star${rating > 1 ? "s" : ""}`
        : "No rating yet"}
    </p>
  );
}
export default function StarRatingApp() {
  const [rating, setRating] = useState(0);

  return (
    <div className="cursor">
      <h1>Star Rating</h1>
      <StarButton rating={rating} setRating={setRating} />
      <RatingDisplay rating={rating} />
    </div>
  );
}
