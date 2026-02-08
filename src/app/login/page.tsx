export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Acrylic background (black on black) */}
      <div
        className="absolute inset-0
               bg-linear-to-br
               from-black via-zinc-900/80 to-black
               blur-2xl"
      ></div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div
          className="w-full max-w-sm
                 bg-zinc-900/40 backdrop-blur-xl
                 border border-white/10
                 rounded-3xl p-8
                 shadow-2xl shadow-black/50
                 text-zinc-100"
        >
          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Welcome back
            </h1>
            <p className="text-sm text-zinc-500 mt-2">
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-11 rounded-xl
                     bg-zinc-800/50
                     border border-white/10
                     px-4 text-sm text-white
                     placeholder:text-zinc-500
                     focus:outline-none focus:border-white/20 focus:bg-zinc-800/60
                     transition-all"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full h-11 rounded-xl
                     bg-zinc-800/50
                     border border-white/10
                     px-4 text-sm text-white
                     placeholder:text-zinc-500
                     focus:outline-none focus:border-white/20 focus:bg-zinc-800/60
                     transition-all"
            />

            {/* Remember me - refined */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-md border-white/20 bg-zinc-800/50
                           checked:bg-white checked:border-white
                           focus:ring-2 focus:ring-white/20 focus:ring-offset-0
                           transition-all cursor-pointer"
                />
                <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  Remember me
                </span>
              </label>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-2 h-11 rounded-xl font-medium text-sm
                     bg-zinc-100 text-black
                     hover:bg-zinc-200
                     active:scale-95
                     transition-all cursor-pointer"
            >
              Sign in
            </button>
          </form>

          {/* Register link */}
          <p className="text-center text-xs text-zinc-500 mt-6">
            Don't have an account?{' '}
            <a href="/register" className="text-white hover:text-zinc-300 transition-colors font-medium">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}