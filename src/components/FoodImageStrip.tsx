"use client";

const foodImages = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop",
];

function Row({ direction, duration }: { direction: "left" | "right"; duration: string }) {
  return (
    <div
      className="flex gap-4"
      style={{
        animation: `${direction === "left" ? "scrollLeft" : "scrollRight"} ${duration} linear infinite`,
      }}
    >
      {[...foodImages, ...foodImages, ...foodImages].map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="h-44 w-64 object-cover rounded-xl flex-shrink-0"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      ))}
    </div>
  );
}

export default function FoodImageStrip() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-[0.04] pointer-events-none overflow-hidden">
      <Row direction="left" duration="40s" />
      <Row direction="right" duration="35s" />
      <Row direction="left" duration="45s" />
    </div>
  );
}