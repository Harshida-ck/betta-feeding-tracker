export default function QuickCheckBanner({ totalFedToday, onQuickFeedNext }) {
  const getStatus = () => {
    if (totalFedToday === 3) {
      return {
        msg: "All fed & happy today! 🌸",
        sub: "Your little swimming pal is full and content ✨",
        bg: "from-pink-400/90 via-rose-300/90 to-purple-400/90 text-white",
        badge: "Full Tummy! 🎉",
      };
    }

    if (totalFedToday === 2) {
      return {
        msg: "Almost there! Just 1 meal left 💕",
        sub: "Don't forget evening nibbles later!",
        bg: "from-amber-300/90 via-rose-300/90 to-pink-300/90 text-slate-800",
        badge: "2/3 Meals Fed",
      };
    }

    if (totalFedToday === 1) {
      return {
        msg: "1 meal done! 2 more to go ✨",
        sub: "Great start to the day!",
        bg: "from-sky-300/90 via-teal-200/90 to-emerald-200/90 text-slate-800",
        badge: "1/3 Meals Fed",
      };
    }

    return {
      msg: "Hungry fishy alert! 🎏",
      sub: "No meals recorded yet today~",
      bg: "from-rose-400/90 via-pink-300/90 to-sky-300/90 text-white",
      badge: "Pending Feed",
    };
  };

  const status = getStatus();

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-r ${status.bg} backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl shadow-pink-200/40 mb-8 border border-white/60 transition-all duration-500`}
    >
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/30 rounded-full blur-2xl pointer-events-none" />

      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="inline-block text-xs font-bold uppercase tracking-wider bg-white/40 backdrop-blur-md px-3.5 py-1 rounded-full text-slate-800 shadow-sm border border-white/50">
            {status.badge}
          </span>

          <h2 className="text-2xl md:text-3xl font-black tracking-tight mt-2">
            {status.msg}
          </h2>

          <p className="text-sm font-semibold opacity-90 mt-1">{status.sub}</p>
        </div>

        {totalFedToday < 3 && (
          <button
            onClick={onQuickFeedNext}
            className="group bg-white/90 backdrop-blur-md text-pink-600 font-extrabold px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg hover:bg-white active:scale-95 transition-all duration-200 whitespace-nowrap flex items-center gap-2 border border-white"
          >
            <span>+ Feed Next Meal</span>
            <span className="group-hover:translate-x-0.5 transition-transform">
              ✨
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
