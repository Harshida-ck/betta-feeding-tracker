export default function Header({ onResetDay }) {
  return (
    <header className="flex items-center justify-between mb-8 bg-white/60 backdrop-blur-xl p-5 rounded-3xl border border-white/80 shadow-lg shadow-purple-100/30">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-tr from-pink-300 via-rose-200 to-purple-300 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-white">
          🐟
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
            Betta Care
          </h1>

          <p className="text-xs font-bold text-pink-400">
            Daily Feeding Journal 💕
          </p>
        </div>
      </div>

      <button
        onClick={onResetDay}
        className="text-xs font-extrabold text-slate-500 hover:text-pink-600 bg-white/80 hover:bg-white border border-pink-100/80 px-4 py-2.5 rounded-2xl shadow-xs transition-all active:scale-95"
      >
        Reset Day 🔄
      </button>
    </header>
  );
}
