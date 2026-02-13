export function RememberMeCheckbox({ checked, onChange }: { checked: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="sr-only"
          />
          <div className={`w-4 h-4 rounded border-2 transition-colors flex items-center justify-center ${
            checked 
              ? 'bg-white border-white' 
              : 'bg-zinc-800/50 border-white/10'   
          }`}>
            {checked && (
              <span className="material-symbols-outlined text-zinc-900 text-[10px] leading-none">
                check
              </span>
            )}
          </div>
        </div>
        <span className="ml-2 text-sm text-white/60 group-hover:text-white/80 transition-colors">
          Remember me
        </span>
      </label>
    </div>
  );
}