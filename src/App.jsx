import { useState, useEffect } from "react";

import Header from "./components/Header";
import QuickCheckBanner from "./components/QuickCheckBanner";
import FeedingTable from "./components/FeedingTable";
import ProgressSummary from "./components/ProgressSummary";

import { defaultMeals, getToday } from "./utils/feeding";

const STORAGE_KEY = "betta_feeding_today";

function loadMeals() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed = JSON.parse(saved);

      if (parsed?.date === getToday() && Array.isArray(parsed.meals)) {
        return parsed.meals;
      }
    }
  } catch (error) {
    console.error("Failed to load feeding data:", error);
  }

  return defaultMeals.map((meal) => ({ ...meal }));
}

export default function App() {
  const [meals, setMeals] = useState(loadMeals);

  // Save feeding data
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          date: getToday(),
          meals,
        })
      );
    } catch (error) {
      console.error("Failed to save feeding data:", error);
    }
  }, [meals]);

  // Mark a meal as fed or undo it
  const handleToggleMeal = (id) => {
    setMeals((previousMeals) =>
      previousMeals.map((meal) => {
        if (meal.id !== id) return meal;

        const nextFed = !meal.fed;

        return {
          ...meal,
          fed: nextFed,
          time: nextFed
            ? new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : null,
        };
      })
    );
  };

  // Feed the first pending meal
  const handleQuickFeedNext = () => {
    const nextMeal = meals.find((meal) => !meal.fed);

    if (nextMeal) {
      handleToggleMeal(nextMeal.id);
    }
  };

  // Reset all meals
  const handleResetDay = () => {
    setMeals((previousMeals) =>
      previousMeals.map((meal) => ({
        ...meal,
        fed: false,
        time: null,
      }))
    );
  };

  const totalFed = meals.filter((meal) => meal.fed).length;

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 p-4 font-sans text-slate-700 md:p-8">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -z-10 top-10 left-10 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />

      <div className="pointer-events-none absolute -z-10 top-1/3 right-10 h-96 w-96 rounded-full bg-purple-300/40 blur-3xl" />

      <div className="pointer-events-none absolute -z-10 bottom-10 left-1/4 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl" />

      <div className="pointer-events-none absolute top-16 right-20 select-none text-2xl opacity-40">
        🫧
      </div>

      <div className="pointer-events-none absolute top-1/2 left-12 select-none text-xl opacity-30">
        ✨
      </div>

      <div className="pointer-events-none absolute bottom-20 right-1/4 select-none text-2xl opacity-40">
        🌸
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <Header onResetDay={handleResetDay} />

        <QuickCheckBanner
          totalFedToday={totalFed}
          onQuickFeedNext={handleQuickFeedNext}
        />

        <FeedingTable meals={meals} onToggleMeal={handleToggleMeal} />

        <ProgressSummary totalFed={totalFed} />
      </div>
    </main>
  );
}
