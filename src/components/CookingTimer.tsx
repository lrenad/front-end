"use client";
import { useEffect, useState } from "react";

type Props = {
  minutes: number;
};

export default function CookingTimer({ minutes }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);
  const [running, setRunning] = useState(false);

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
  const progress = secondsLeft / (minutes * 60);
  const isFinished = secondsLeft === 0;

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-5 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
          Cooking Timer
        </p>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
          isFinished
            ? "bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400"
            : running
            ? "bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400"
            : "bg-gray-100 dark:bg-gray-800 text-gray-400"
        }`}>
          {isFinished ? "Done" : running ? "Running" : "Paused"}
        </span>
      </div>

      {/* Time display */}
      <div className="flex items-end gap-2 mb-4">
        <p className={`text-4xl font-mono font-bold tracking-tight transition-colors ${
          isFinished
            ? "text-red-600 dark:text-red-400"
            : "text-gray-900 dark:text-white"
        }`}>
          {mins.toString().padStart(2, "0")}
          <span className="animate-pulse">:</span>
          {secs.toString().padStart(2, "0")}
        </p>
        <p className="text-sm text-gray-400 mb-3">min</p>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${
            progress < 0.25
              ? "bg-red-500"
              : progress < 0.5
              ? "bg-orange-500"
              : "bg-red-700"
          }`}
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setRunning(true)}
          disabled={running || isFinished}
          className="flex-1 bg-red-700 hover:bg-red-800 disabled:opacity-40 text-white text-sm font-medium py-2.5 rounded-xl transition-colors"
        >
          ▶ Start
        </button>
        <button
          onClick={() => setRunning(false)}
          disabled={!running}
          className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-40 text-gray-700 dark:text-gray-300 text-sm font-medium py-2.5 rounded-xl transition-colors"
        >
          ⏸ Pause
        </button>
        <button
          onClick={() => { setRunning(false); setSecondsLeft(minutes * 60); }}
          className="px-5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium py-2.5 rounded-xl transition-colors"
        >
          ↺
        </button>
      </div>
    </div>
  );
}