export function RememberMe(){
  return (
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
  )
}