export function RememberMeCheckbox({ checked, onChange }: { checked: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
        checked 
          ? 'bg-indigo-600 border-indigo-600' 
          : 'bg-white/5 border-white/20'
      }`}>
        {checked && (
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <span className="ml-2 text-sm text-gray-400">
        Remember me
      </span>
    </label>
  );
}