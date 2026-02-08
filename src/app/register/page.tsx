export default function RegisterPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Acrylic background */}
      <div
        className="absolute inset-0
               bg-linear-to-br
               from-black via-zinc-900/80 to-black
               blur-2xl"
      ></div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div
          className="w-full max-w-md
                 bg-zinc-900/40 backdrop-blur-xl
                 border border-white/10
                 rounded-3xl p-10
                 shadow-2xl shadow-black/50
                 text-zinc-100"
        >
          {/* Title */}
          <div className="mb-10">
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Join us
            </h1>
            <p className="text-sm text-zinc-500 mt-3">
              Create your account and start your journey
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Name field */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-2">
                Full name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full h-12 rounded-xl
                       bg-zinc-800/50
                       border border-white/10
                       px-4 text-sm text-white
                       placeholder:text-zinc-600
                       focus:outline-none focus:border-white/20 focus:bg-zinc-800/60
                       transition-all"
              />
            </div>

            {/* Email field */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 rounded-xl
                       bg-zinc-800/50
                       border border-white/10
                       px-4 text-sm text-white
                       placeholder:text-zinc-600
                       focus:outline-none focus:border-white/20 focus:bg-zinc-800/60
                       transition-all"
              />
            </div>

            {/* Password field */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full h-12 rounded-xl
                       bg-zinc-800/50
                       border border-white/10
                       px-4 text-sm text-white
                       placeholder:text-zinc-600
                       focus:outline-none focus:border-white/20 focus:bg-zinc-800/60
                       transition-all"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl font-medium text-sm
                     bg-zinc-100 text-black
                     hover:bg-zinc-200
                     active:scale-95
                     transition-all mt-6 cursor-pointer"
            >
              Create account
            </button>
          </form>

          {/* Login link */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-center text-xs text-zinc-500">
              Already have an account?{' '}
              <a href="/login" className="text-white hover:text-zinc-300 transition-colors font-medium">
                Sign in instead
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}