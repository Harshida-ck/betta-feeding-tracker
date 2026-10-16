export default function FeedingTable({ meals, onToggleMeal }) {
  return (
    <div className="w-full mb-8">
      <div className="w-full max-w-3xl mx-auto bg-white/70 backdrop-blur-2xl rounded-3xl shadow-xl shadow-purple-100/50 border border-white/80 overflow-hidden">
        {/* Table Header */}
        <div className="p-5 bg-gradient-to-r from-pink-100/40 via-purple-100/40 to-sky-100/40 border-b border-white/80 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl animate-bounce">🫧</span>

            <h2 className="font-bold text-slate-700 text-lg tracking-tight">
              Feeding Schedule
            </h2>
          </div>

          <span className="text-xs font-extrabold text-pink-500 bg-pink-100/80 px-3 py-1 rounded-full border border-pink-200/50">
            3 Treats Daily
          </span>
        </div>

        {/* Table */}
        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-pink-100/40 bg-slate-50/40 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                <th className="py-3.5 px-6">Meal</th>
                <th className="py-3.5 px-6">Portion</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6">Time</th>
                <th className="py-3.5 px-6 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-pink-50/60 text-sm">
              {meals.map((meal) => (
                <tr
                  key={meal.id}
                  className={`transition-colors duration-200 ${
                    meal.fed ? "bg-emerald-50/40" : "hover:bg-pink-50/30"
                  }`}
                >
                  <td className="py-4 px-6 font-bold text-slate-700">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-2xl bg-white/80 shadow-sm border border-pink-100 text-lg">
                        {meal.icon}
                      </span>

                      <span className="whitespace-nowrap">{meal.name}</span>
                    </div>
                  </td>

                  <td className="py-4 px-6 text-slate-500 font-medium whitespace-nowrap">
                    <span className="inline-block bg-white/80 text-slate-600 px-3 py-1 rounded-xl text-xs font-bold border border-pink-100/80 shadow-sm">
                      {meal.pellets} {meal.pellets === 1 ? "pellet" : "pellets"}
                    </span>
                  </td>

                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                        meal.fed
                          ? "bg-emerald-100/80 text-emerald-700 border border-emerald-200/60"
                          : "bg-rose-100/80 text-rose-600 border border-rose-200/60"
                      }`}
                    >
                      {meal.fed ? "💖 FED" : "⏳ PENDING"}
                    </span>
                  </td>

                  <td className="py-4 px-6 text-slate-400 text-xs font-semibold whitespace-nowrap">
                    {meal.fed ? (
                      <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md font-bold">
                        {meal.time}
                      </span>
                    ) : (
                      "—"
                    )}
                  </td>

                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => onToggleMeal(meal.id)}
                      className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap ${
                        meal.fed
                          ? "bg-white/80 hover:bg-white text-slate-600 border border-slate-200/80"
                          : "bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white shadow-pink-200"
                      }`}
                    >
                      {meal.fed ? "Undo" : "Mark Fed ✨"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3 p-3">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className={`rounded-2xl border p-4 shadow-sm transition-all ${
                meal.fed
                  ? "bg-emerald-50/60 border-emerald-100"
                  : "bg-white/70 border-pink-100"
              }`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-pink-100 text-lg">
                    {meal.icon}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-700 truncate">
                      {meal.name}
                    </h3>

                    <span className="inline-block mt-1 bg-white/80 text-slate-600 px-2.5 py-1 rounded-lg text-[11px] font-bold border border-pink-100/80">
                      {meal.pellets} {meal.pellets === 1 ? "pellet" : "pellets"}
                    </span>
                  </div>
                </div>

                {/* Status */}
                <span
                  className={`shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    meal.fed
                      ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      : "bg-rose-100 text-rose-600 border border-rose-200"
                  }`}
                >
                  {meal.fed ? "💖 FED" : "⏳ PENDING"}
                </span>
              </div>

              {/* Bottom row */}
              <div className="mt-4 pt-3 border-t border-pink-100/60 flex items-center justify-between gap-3">
                <div className="text-xs font-semibold text-slate-400">
                  {meal.fed ? (
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md font-bold">
                      🕐 {meal.time}
                    </span>
                  ) : (
                    "Not fed yet"
                  )}
                </div>

                <button
                  onClick={() => onToggleMeal(meal.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-200 shadow-sm active:scale-95 ${
                    meal.fed
                      ? "bg-white text-slate-600 border border-slate-200"
                      : "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-pink-200"
                  }`}
                >
                  {meal.fed ? "Undo" : "Mark Fed ✨"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
