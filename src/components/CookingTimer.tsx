"use client";

import { useEffect, useState } from "react";

type Props = {
  minutes: number;
};

export default function CookingTimer({
  minutes,
}: Props) {
  const [secondsLeft, setSecondsLeft] =
    useState(minutes * 60);

  const [running, setRunning] =
    useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("Cooking time is up!");
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  return (
    <div className="mt-6 border p-4 rounded-lg text-black shadow-xl">
      <h3 className="font-bold text-xl mb-2">
        Cooking Timer
      </h3>

      <p className="text-3xl font-mono mb-4 text-black" >
        {mins}:{secs.toString().padStart(2, "0")}
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => setRunning(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 dark:text-shadow-2xs"
        >
          Start Cooking
        </button>

        <button
          onClick={() => setRunning(false)}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 dark:text-shadow-2xs"
        >
          Pause
        </button>
      </div>
    </div>
  );
}