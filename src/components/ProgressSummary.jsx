export default function ProgressSummary({ totalFed }) {
  const percentage = Math.round((totalFed / 3) * 100);

  return (
    <div className="bg-white/70 backdrop-blur-2xl border border-white/80 rounded-3xl p-6 shadow-xl shadow-purple-100/40">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest font-black text-pink-400">
            Today's Goal Progress
          </p>

          <p className="text-2xl font-black text-slate-700 mt-0.5">
            {totalFed} <span className="text-slate-300">/</span> 3 meals
          </p>
        </div>

        <div className="w-full sm:w-64 flex flex-col gap-1.5">
          <div className="w-full h-4 bg-pink-100/60 rounded-full p-0.5 shadow-inner border border-pink-100/80">
            <div
              className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="flex justify-between text-[10px] font-extrabold text-slate-400 px-1">
            <span>0%</span>
            <span>{percentage}% Complete</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
